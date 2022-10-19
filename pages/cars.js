import React from 'react';
import { useRouter } from 'next/router';
import Car from 'components/Car';
import { connectToDatabase } from 'lib/mongodb';
import { carssection } from 'lib/content';

const cars = ({ cars }) => {
  const router = useRouter();

  return (
    <section className='2xl:px-0 block px-4 bg-slate-100'>
      <div className='container mx-auto py-16'>
        <h2 className='text-4xl font-medium mb-8'>
          {carssection[router.locale].h2}
        </h2>
        <p className='text-base mb-16'>{carssection[router.locale].p}</p>
        <div className='sm:grid-cols-3 w-max grid grid-cols-1 gap-16 mx-auto'>
          {JSON.parse(cars).map((data) => (
            <Car data={data} />
          ))}
        </div>
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
    props, // will be passed to the page component as props
  };
}

export default cars;
