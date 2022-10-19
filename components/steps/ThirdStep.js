import React, { useContext } from 'react';
import { reservationpage } from 'lib/content';
import Input from 'components/common/Input';
import { ErrorContext } from 'components/context/ErrorContext';

const ThirdStep = ({ data, setData, router }) => {
  const { errorObj } = useContext(ErrorContext);

  const onChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  return (
    <div className='mt-24'>
      <p className='text-2xl text-medium mb-4'>
        {reservationpage[router.locale].informations}
      </p>

      <div className='flex flex-col items-center my-16'>
        <Input
          className='md:w-2/4 w-full'
          type='text'
          label={reservationpage[router.locale].form.fullName}
          placeholder={reservationpage[router.locale].form.fullName}
          name='name'
          value={data.name}
          onChange={onChange}
          error={errorObj.name}
          required
        />
        <div className='md:w-2/4 flex flex-wrap items-center justify-center w-full'>
          <Input
            className='md:w-2/4 w-full'
            type='text'
            label={reservationpage[router.locale].form.email}
            placeholder={reservationpage[router.locale].form.email}
            name='email'
            value={data.email}
            onChange={onChange}
            error={errorObj.email}
            required
          />
          <Input
            className='md:w-2/4 w-full'
            type='text'
            label={reservationpage[router.locale].form.years}
            placeholder={reservationpage[router.locale].form.years}
            name='years'
            value={data.years}
            onChange={onChange}
            error={errorObj.years}
            required
          />
        </div>
        <div className='md:w-2/4 flex flex-wrap items-center justify-center w-full'>
          <Input
            className='md:w-2/4 w-full'
            type='text'
            label={reservationpage[router.locale].form.state}
            placeholder={reservationpage[router.locale].form.state}
            name='state'
            value={data.state}
            onChange={onChange}
            error={errorObj.state}
            required
          />
          <Input
            className='sm:w-2/4 w-full'
            type='text'
            label={reservationpage[router.locale].form.phoneNumber}
            placeholder={reservationpage[router.locale].form.phoneNumber}
            name='phoneNumber'
            value={data.phoneNumber}
            onChange={onChange}
          />
        </div>
        <Input
          className='md:w-2/4 w-full'
          type='text'
          label={reservationpage[router.locale].form.message}
          placeholder={reservationpage[router.locale].form.message}
          name='message'
          value={data.message}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ThirdStep;
