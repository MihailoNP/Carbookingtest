import React, { useContext } from 'react';
import { CurrencyContext } from 'components/context/CurrencyContext';
import { ReservationContext } from 'components/context/ReservationContext';

import CheckmarkSVG from 'public/svg/checkmarkIcon.svg';

const Extra = ({
  className = '',
  data = {},
  selected = false,
  value = 0,
  preview = false,
  subtractValue = () => {},
  addValue = () => {},
  selectExtra = () => {},
}) => {
  const { data: reservationData } = useContext(ReservationContext);
  const { currency, formatCurrency } = useContext(CurrencyContext);

  return (
    <div
      className={`${className} ${
        selected || value > 0 ? 'border-primary' : 'border-gray-500'
      } relative flex flex-col items-start justify-between h-max p-6 cursor-pointer border-2  rounded-xl`}
      onClick={preview ? null : data.type === 'check' ? selectExtra : null}
    >
      {(selected || value > 0) && (
        <CheckmarkSVG className='w-8 h-8 absolute top-0 right-0' />
      )}

      <p
        className={`${(selected || value) > 0 && 'text-primary'} ${
          className.includes('justify-center') && 'text-center'
        } text-sm uppercase font-medium`}
      >
        {data.title}
      </p>

      {data.paragraph && (
        <div className='flex items-center mt-4'>
          {data.price && (
            <span className='text-slate-500'>{formatCurrency(data.price)}</span>
          )}
          &nbsp;
          <p className='text-slate-500 whitespace-nowrap'>{data.paragraph}</p>
          &nbsp;
          {data.maxPrice && (
            <span className='text-slate-500'>
              {formatCurrency(data.maxPrice)}
            </span>
          )}
        </div>
      )}

      {data.gratis && (
        <p className='sm:px-4 bg-primary text-lg text-white px-2 rounded-xl mx-auto my-4'>
          GRATIS
        </p>
      )}

      {data.type === 'number' &&
        (!preview ? (
          <div className='flex items-center mx-auto font-medium text-primary'>
            <button
              className='flex items-center justify-center h-6 w-6 rounded-full border-2 border-primary'
              onClick={subtractValue}
            >
              -
            </button>
            <span
              className={`${
                value !== 0 && 'text-primary'
              } mx-4 text-lg underline`}
            >
              {value}
            </span>
            <button
              className='flex items-center justify-center h-6 w-6 rounded-full border-2 border-primary'
              onClick={addValue}
            >
              +
            </button>
          </div>
        ) : (
          <div className='flex items-center mx-auto font-medium text-primary'>
            x {reservationData.extras[data.name].value}
          </div>
        ))}
    </div>
  );
};

export default Extra;
