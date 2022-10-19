import React, { useContext, useEffect } from 'react';
import { connectToDatabase } from 'lib/mongodb';
import { ReservationContext } from 'components/context/ReservationContext';
import { ErrorContext } from 'components/context/ErrorContext';
import HeroSection from 'components/HeroSection';
import ReservationForm from 'components/ReservationForm';
import Cars from 'components/Cars';
import Services from 'components/Services';
import Testemonials from 'components/Testemonials';
import Newsletter from 'components/Newsletter';

export default function Home({ cars }) {
  const { setData } = useContext(ReservationContext);
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    setData({ extras: {} });
    setError(false);
  }, []);

  return (
    <>
      <HeroSection />
      <ReservationForm />
      <Cars data={JSON.parse(cars)} />
      <Services />
      <Testemonials />
      <Newsletter />
    </>
  );
}

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
    props, // will be passed to the page component as props
  };
}
