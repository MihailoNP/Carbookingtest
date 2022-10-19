import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ReservationContext } from './context/ReservationContext';
import { ErrorContext } from 'components/context/ErrorContext';
import { CurrencyContext } from 'components/context/CurrencyContext';
import Image from 'next/image';
import { car } from 'lib/content';

import SeatsSVG from 'public/svg/seatsIcon.svg';
import AcSVG from 'public/svg/acIcon.svg';
import TransitionSVG from 'public/svg/transitionIcon.svg';
import PumpSVG from 'public/svg/pumpIcon.svg';
import StarSVG from 'public/svg/starIcon.svg';
import CheckmarkSVG from 'public/svg/checkmarkIcon.svg';

import carStyles from 'styles/car.module.css';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const Car = ({ data, slider = true }) => {
  const router = useRouter();
  const { data: reservationData, setData } = useContext(ReservationContext);
  const { error, setError } = useContext(ErrorContext);
  const { formatCurrency } = useContext(CurrencyContext);

  const onMouseOver = ({ target }) => {
    console.log(target);
  };

  const selectCar = () => {
    setError(false);
    setData({ ...reservationData, car: data });
    if (router.asPath !== '/reservation') {
      router.push('/reservation');
    }
  };

  const secondRowClass =
    'flex justify-center items-center text-slate-400 text-sm';
  const starClass = 'h-6 w-6 mr-2 hover:fill-secondary';

  return (
    <div
      className={`${
        carStyles.car
      } relative rounded-lg h-full bg-white shadow-lg shadow-slate-300 p-4 border-2 border-transparent cursor-pointer transition-all ${
        !slider &&
        (reservationData.car && reservationData.car._id === data._id
          ? 'border-primary hover:scale-105'
          : 'hover:border-secondary hover:scale-105')
      }`}
      onClick={
        reservationData.car && data._id === reservationData.car._id
          ? null
          : selectCar
      }
    >
      {reservationData.car && data._id === reservationData.car._id && (
        <CheckmarkSVG className='w-8 h-8 absolute top-0 right-0' />
      )}
      <h3 className='font-semibold text-xl mb-4 truncate' title={data.name}>
        {data.name}
      </h3>
      <div className='flex flex-col items-center'>
        <div className='mb-4'>
          <Image
            src={`/api/img/${data.img}`}
            layout='fixed'
            width={250}
            height={120}
            alt={data.name}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(250, 100)
            )}`}
          />
        </div>
        <p className='text-base font-medium mb-4 w-full'>
          {data.price && (
            <span className='text-3xl'>{formatCurrency(data.price)}</span>
          )}{' '}
          / {car[router.locale].day}
        </p>
        <div className='w-full flex justify-start mb-4'>
          {[...Array(5).keys()].map(() => (
            <StarSVG className={starClass} onMouseOver={onMouseOver} />
          ))}
        </div>
        <div className='w-full mb-4'>
          <div className='grid grid-cols-4 justify-items-center mb-2'>
            {[SeatsSVG, AcSVG, TransitionSVG, PumpSVG].map((Icon, index) => (
              <div
                className='flex justify-center items-center rounded-lg bg-slate-100 h-10 w-10'
                key={index}
              >
                <Icon className='h-6 w-6' />
              </div>
            ))}
          </div>
          <div className='grid grid-cols-4 justify-items-center'>
            <div className={secondRowClass}>{data.noPersons}</div>
            <div className={secondRowClass}>{data.ac ? 'AC' : 'No'}</div>
            <div className={secondRowClass}>
              {data.automatic === 'Automatik' ? 'Auto' : 'Manual'}
            </div>
            <div className={secondRowClass}>
              {data.fuel === 'Dizel' ? 'Disel' : 'Petrol'}
            </div>
          </div>
        </div>
        <button
          className={`bg-secondary text-white rounded px-8 py-2 font-medium uppercase ${
            slider
              ? 'transition-all hover:border-secondary hover:scale-105'
              : reservationData.car &&
                reservationData.car._id === data._id &&
                'bg-primary'
          }`}
        >
          {reservationData.car && reservationData.car._id === data._id
            ? car[router.locale].selected
            : router.asPath === '/reservation'
            ? car[router.locale].select
            : car[router.locale].reserve}
        </button>
      </div>
    </div>
  );
};

export default Car;
