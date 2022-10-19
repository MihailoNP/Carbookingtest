import React from 'react';
import { useRouter } from 'next/router';
import { conditionspage } from 'lib/content';

const conditions = () => {
  const router = useRouter();

  return (
    <section className='2xl:px-0 px-4 py-32 bg-slate-100'>
      <div className='xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 container mx-auto grid grid-cols-1 gap-4'>
        {conditionspage[router.locale].conditions.map((data) => (
          <div className='flex flex-col justify-start items-center bg-white rounded-lg shadow-lg p-4 text-sm cursor-pointer'>
            <div className='w-16 h-16 flex items-center justify-center'>
              {data.icon}
            </div>
            <h3 className='mt-2 mb-4 text-base font-medium font-secondary'>
              {data.h3}
            </h3>
            <p className='text-justify text-slate-500'>{data.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default conditions;
