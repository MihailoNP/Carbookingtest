import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Input from 'components/common/Input';
import { timeValues } from 'lib/utils';
import { LanguageContext } from 'components/context/LanguageContext';
import { ReservationContext } from './context/ReservationContext';
import { ErrorContext } from 'components//context/ErrorContext';
import { reservationform } from 'lib/content';
import Button from 'components/common/Button';

const ReservationForm = () => {
  const { language } = useContext(LanguageContext);
  const { data, setData } = useContext(ReservationContext);
  const { errorObj, parseError } = useContext(ErrorContext);

  const router = useRouter();

  const [formData, setFormData] = useState({ ...data });
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('/api/get', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          collection: 'locations',
          project: { [language]: 1 },
        }),
      });

      const data = await response.json();

      setLocations(data.map((location) => ({ label: location[language] })));
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    setFormData({ ...data });
  }, [data]);

  const onChange = ({ target: { name, value } }) => {
    let newData = {...formData, [name]: value};

    if (name === "pickupDate") {
      newData.returnDate = null;
    } 
    
    setData(newData);
    setFormData(newData);
  };

  const reserve = async () => {
    const isError = await parseError([
      'pickupLocation',
      'returnLocation',
      'pickupDate',
      'returnDate',
    ]);

    if (!isError) {
      setData({ ...formData });
      router.push('/reservation');
      return;
    }
  };

  const inputClassName =
    'xl:w-3/12 lg:border-r-2 lg:border-b-0 w-full border-b-2';

  return (
    <section className='2xl:px-0 relative z-10 py-2 px-4 bg-slate-100'>
      <div className='container mx-auto'>
        <div className='lg:flex-row lg:flex-nowrap flex flex-col flex-wrap items-center justify-around bg-white rounded'>
          <Input
            className={`${inputClassName} lg:w-min`}
            type='location'
            label={reservationform[router.locale].pickuplocation}
            name='pickupLocation'
            value={formData.pickupLocation}
            onChange={onChange}
            items={locations}
            error={errorObj.pickupLocation}
            required
          />
          <Input
            className={`${inputClassName} lg:w-min`}
            type='location'
            label={reservationform[router.locale].returnlocation}
            name='returnLocation'
            value={formData.returnLocation}
            onChange={onChange}
            items={locations}
            error={errorObj.returnLocation}
            required
          />

          <div
            className={`${inputClassName} lg:w-4/12 sm:flex-row flex flex-col`}
          >
            <Input
              className='md:w-4/6 w-full'
              type='date'
              label={reservationform[router.locale].pickupdatetime}
              name='pickupDate'
              value={formData.pickupDate}
              onChange={onChange}
              error={errorObj.pickupDate}
              required
            />

            <Input
              className='md:w-2/6 w-full'
              type='time'
              label={<>&nbsp;</>}
              name='pickupTime'
              value={formData.pickupTime}
              defaultValue='12:00'
              onChange={onChange}
              items={timeValues}
            />
          </div>

          <div
            className={`${inputClassName} lg:w-4/12 lg:border-r-0 sm:flex-row flex flex-col border-b-0`}
          >
            <Input
              className='md:w-4/6 w-full'
              type='date'
              label={reservationform[router.locale].returndatetime}
              name='returnDate'
              value={formData.returnDate}
              onChange={onChange}
              minDate={
                formData.pickupDate &&
                new Date(formData.pickupDate.getTime() + 86400000)
              }
              error={errorObj.returnDate}
              required
            />

            <Input
              className='md:w-2/6 w-full'
              type='time'
              label={<>&nbsp;</>}
              name='returnTime'
              value={formData.returnTime}
              defaultValue='12:00'
              onChange={onChange}
              items={timeValues}
            />
          </div>
        </div>
        {router.asPath === '/' && (
          <Button
            className='w-48 block mt-8 mx-auto transition-all hover:scale-105'
            label={reservationform[router.locale].button}
            onClick={reserve}
          />
        )}
      </div>
    </section>
  );
};

export default ReservationForm;
