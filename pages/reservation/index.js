import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { connectToDatabase } from 'lib/mongodb';
import { reservationpage } from 'lib/content';
import { ReservationContext } from 'components/context/ReservationContext';
import { ErrorContext } from 'components/context/ErrorContext';
import { CurrencyContext } from 'components/context/CurrencyContext';
import { extras as extrasContent } from 'lib/content';

import FirstStep from 'components/steps/FirstStep';
import SecondStep from 'components/steps/SecondStep';
import ThirdStep from 'components/steps/ThirdStep';
import FourthStep from 'components/steps/FourthStep';
import ReservationForm from 'components/ReservationForm';
import Button from 'components/common/Button';

import ChevronrightSVG from 'public/svg/chevronrightIcon.svg';
import ChevronleftSVG from 'public/svg/chevronleftIcon.svg';

const index = ({ cars }) => {
  const { data, setData } = useContext(ReservationContext);
  const { error, errorObj, parseError } = useContext(ErrorContext);
  const { currency, formatCurrency } = useContext(CurrencyContext);

  const [step, setStep] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [rentalAmount, setRentalAmount] = useState(0);
  const [finished, setFinished] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (data.car && data.car._id && step === 1) {
      setStep(2);
    }
  }, [data]);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => {
    setStep(step - 1);
    scrollToTop();
  };

  const validateStep = async () => {
    if (step === 1 || step === 2) {
      const isError = await parseError([
        'pickupLocation',
        'returnLocation',
        'pickupDate',
        'returnDate',
        'car',
      ]);
      if (isError) {
        scrollToTop();
        return;
      }
    } else if (step === 3) {
      const isError = await parseError(['name', 'email', 'years', 'state']);
      if (isError) {
        scrollToTop();
        return;
      }
    }

    scrollToTop();
    nextStep();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const finishReservation = async () => {
    const {
      name,
      email,
      phoneNumber,
      years,
      state,
      message,
      pickupLocation,
      returnLocation,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      extras,
    } = data;
    let reservationId = 1;

    let requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        collection: 'reservations',
      }),
    };

    const response = await fetch('/api/get', requestOptions);
    const responseJSON = await response.json();

    if (responseJSON.length && responseJSON[0].reservationId) {
      reservationId = responseJSON[0].reservationId + 1;
    }

    requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        collection: 'reservations',
        data: {
          fullName: name,
          email,
          phoneNumber,
          years,
          message,
          state,
          pickUpPlace: pickupLocation,
          returnPlace: returnLocation,
          pickUpDate: pickupDate,
          pickUpTime: pickupTime || '12:00',
          returnDate,
          returnTime: returnTime || '12:00',
          createdOn: new Date(),
          reservationId,
          extras,
        },
      }),
    };
    await fetch('/api/add', requestOptions);
    await sendEmail(reservationId);
  };

  const sendEmail = async (reservationId) => {
    const {
      name,
      email,
      phoneNumber,
      years,
      message,
      state,
      car,
      pickupLocation,
      returnLocation,
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
      extras,
    } = data;

    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservationId,
        fullName: name,
        state,
        email,
        phoneNumber,
        years,
        message,
        vehicle: car.name,
        automatic:
          router.locale === 'en'
            ? car.automatic === 'Automatik'
              ? 'Automatic'
              : 'Manual'
            : automatic,
        fuel: car.fuel,
        pickupDate: `${new Date(pickupDate).toLocaleDateString(
          'en-GB'
        )} ${pickupTime}`,
        returnDate: `${new Date(returnDate).toLocaleDateString(
          'en-GB'
        )} ${returnTime}`,
        pickupLocation,
        returnLocation,
        date: new Date(pickupDate).toLocaleDateString('en-GB'),
        currentDate: new Date().toLocaleDateString('en-GB'),
        rentalAmount: formatCurrency(rentalAmount),
        extrasAmount: formatCurrency(totalAmount - rentalAmount),
        totalAmount: formatCurrency(totalAmount),
        language: router.locale,
        extras,
        currency,
      }),
    };
    await fetch('/api/sendReservationEmail', requestOptions);

    setFinished(true);
  };

  return (
    <section className='xl:px-0 px-4 py-20 bg-slate-100'>
      <div className='container mx-auto'>
        {finished ? (
          <p className='text-3xl text-medium text-secondary text-center my-16'>
            {reservationpage[router.locale].thankyou}
          </p>
        ) : (
          <>
            {step !== 4 && <ReservationForm />}

            {errorObj.car && (
              <p className='w-full bg-[#ff0000] p-2 text-white mt-24 mb-8'>
                {errorObj.car.message[router.locale]}
              </p>
            )}

            {step === 1 && (
              <FirstStep data={JSON.parse(cars)} router={router} />
            )}
            {step === 2 && (
              <SecondStep
                data={data}
                setData={setData}
                error={error}
                router={router}
              />
            )}
            {step === 3 && (
              <ThirdStep data={data} setData={setData} router={router} />
            )}
            {step === 4 && (
              <FourthStep
                data={data}
                router={router}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
                setRentalAmount={setRentalAmount}
                formatCurrency={formatCurrency}
              />
            )}

            <div className='sm:flex-row flex flex-col justify-between items-center mt-16'>
              <div className='sm:mr-0 sm:mb-0 mr-auto mb-4'>
                {step > 1 && (
                  <Button
                    className='block px-3 transition-all hover:scale-105'
                    type='secondary'
                    label={
                      <div className='flex text-white'>
                        <ChevronleftSVG stroke='white' width='20px' />{' '}
                        {reservationpage[router.locale].prevStep}
                      </div>
                    }
                    onClick={previousStep}
                  />
                )}
              </div>

              {step !== 4 ? (
                <Button
                  className='sm:ml-0 block px-3 ml-auto transition-all hover:scale-105'
                  type='primary'
                  label={
                    <div className='flex text-white'>
                      {reservationpage[router.locale].nextStep}{' '}
                      <ChevronrightSVG stroke='white' width='20px' />
                    </div>
                  }
                  onClick={validateStep}
                />
              ) : (
                <Button
                  className='sm:ml-0 block px-3 ml-auto transition-all hover:scale-105'
                  type='primary'
                  label={
                    <div className='flex text-white'>
                      {reservationpage[router.locale].finish}{' '}
                    </div>
                  }
                  onClick={finishReservation}
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  let props = {};
  try {
    const { db } = await connectToDatabase();

    const result = await db
      .collection('vehicles')
      .find()
      .sort({ createdOn: -1 })
      .toArray();

    props.cars = JSON.stringify(result);
  } catch (error) {
    console.log('get cars error', error);
  }

  return {
    props,
  };
}

export default index;
