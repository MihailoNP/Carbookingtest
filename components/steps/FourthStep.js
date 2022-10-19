import React, { useEffect, useState } from 'react';
import { extras, reservationform, reservationpage } from 'lib/content';
import Input from 'components/common/Input';
import Car from 'components/Car';
import Extra from 'components/Extra';

const FourthStep = ({
  data,
  router,
  totalAmount,
  setTotalAmount,
  setRentalAmount,
  formatCurrency,
}) => {
  useEffect(() => {
    if (
      data.car &&
      data.car._id &&
      data.pickupLocation &&
      data.returnLocation &&
      data.pickupDate &&
      data.returnDate
    ) {
      calculateTotalAmount();
    }
  }, [data]);

  const calculateTotalAmount = () => {
    let dateDiff =
      (new Date(data.returnDate) - new Date(data.pickupDate)) /
      (1000 * 3600 * 24);

    let totalAmount =
      dateDiff < 21
        ? (Number(data.car.price) / Math.pow(1.04, dateDiff)) * dateDiff
        : (Number(data.car.price) / Math.pow(1.04, 20)) * dateDiff;

    setRentalAmount(totalAmount);

    totalAmount += calculateExtrasAmount(dateDiff);

    setTotalAmount(Number(totalAmount.toFixed(2)));
  };

  const calculateExtrasAmount = (dateDiff) => {
    let sum = 0;

    extras[router.locale].insurance.forEach(
      ({ name, price }) =>
        data.extras[name].selected && (sum += dateDiff * price)
    );

    extras[router.locale].extras
      .filter((obj) => !obj.gratis)
      .forEach(
        ({ name, price, maxPrice }) =>
          (data.extras[name].selected || data.extras[name].value > 0) &&
          (maxPrice && maxPrice > dateDiff * price
            ? (sum += dateDiff * price)
            : (sum += maxPrice))
      );

    return sum;
  };

  // const border = <div className='w-full my-4 border-b-2 border-gray-300'></div>;

  return (
    <div>
      <p className='text-2xl text-medium mb-8'>
        {reservationpage[router.locale].reservationInformations}
      </p>
      <div className='flex flex-wrap items-center'>
        <div className='md:w-2/4 w-full'>
          <Car data={data.car} slider={false} />
        </div>

        <div className='md:w-2/4 flex flex-col items-center my-16 w-full'>
          <div className='flex flex-wrap items-center justify-center w-full'>
            <Input
              className='md:w-2/4 w-full'
              type='text'
              label={reservationform[router.locale].pickuplocation}
              value={data.pickupLocation}
              disabled
            />
            <Input
              className='md:w-2/4 w-full'
              type='text'
              label={reservationform[router.locale].returnlocation}
              value={data.returnLocation}
              disabled
            />
          </div>
          <div className='flex flex-wrap items-center justify-center w-full'>
            <Input
              className='md:w-2/4 w-full'
              type='text'
              label={reservationform[router.locale].pickupdatetime}
              value={`${new Date(data.pickupDate).toLocaleDateString(
                'en-GB'
              )} ${data.pickupTime}`}
              disabled
            />
            <Input
              className='md:w-2/4 w-full'
              type='text'
              label={reservationform[router.locale].returndatetime}
              value={`${new Date(data.returnDate).toLocaleDateString(
                'en-GB'
              )} ${data.returnTime}`}
              disabled
            />
          </div>
          <Input
            className='w-full'
            type='text'
            label={reservationpage[router.locale].form.fullName}
            value={data.name}
            disabled
          />
          <div className='flex flex-wrap items-center justify-center w-full'>
            <Input
              className='md:w-2/4 w-full'
              type='text'
              label={reservationpage[router.locale].form.email}
              value={data.email}
              disabled
            />
            <Input
              className='md:w-2/4 w-full'
              type='text'
              label={reservationpage[router.locale].form.years}
              value={data.years}
              disabled
            />
          </div>
          <div className='w-full flex flex-wrap items-center justify-center'>
            <Input
              className='sm:w-2/4 w-full'
              type='text'
              label={reservationpage[router.locale].form.state}
              value={data.state}
              disabled
            />
            <Input
              className='sm:w-2/4 w-full'
              type='text'
              label={reservationpage[router.locale].form.phoneNumber}
              value={data.phoneNumber}
              disabled
            />
          </div>
          <Input
            className='w-full'
            type='text'
            label={reservationpage[router.locale].form.message}
            value={data.message}
            disabled
          />
        </div>
      </div>

      <p className='text-2xl text-medium my-16'>
        {reservationpage[router.locale].extras}
      </p>

      <div className='lg:grid-cols-[250px_250px_250px] sm:grid-cols-[250px_250px] sm:justify-start grid grid-cols-[250px] justify-center gap-4'>
        {extras[router.locale].included.map((obj) => (
          <Extra data={obj} selected={true} />
        ))}
      </div>

      <div className='xl:grid-cols-[250px_250px_250px_250px] lg:grid-cols-[250px_250px_250px] sm:grid-cols-[250px_250px] sm:justify-start grid grid-cols-[250px] justify-center gap-4 mt-4 mb-16'>
        {extras[router.locale].insurance.map(
          (obj) =>
            data.extras[obj.name] && (
              <Extra data={obj} selected={true} preview={true} />
            )
        )}
        {extras[router.locale].extras.map(
          (obj) =>
            (data.extras[obj.name].selected ||
              data.extras[obj.name].value > 0) && (
              <Extra data={obj} selected={true} preview={true} />
            )
        )}
      </div>

      <div className='flex items-center justify-between my-16'>
        <p className='text-2xl text-medium'>
          {reservationpage[router.locale].totalPrice}:
        </p>{' '}
        <b className='text-4xl'>{formatCurrency(totalAmount)}</b>
      </div>
    </div>
  );
};

export default FourthStep;
