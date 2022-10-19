import React from 'react';
import { useRouter } from 'next/router';
import { services } from 'lib/content';

import servicesStyles from 'styles/services.module.css';

const Services = () => {
  const router = useRouter();
  return (
    <section className={`${servicesStyles.bg} 2xl:px-0 px-4`} id='services'>
      <div className='container mx-auto flex flex-col items-center justify-between py-40'>
        <h2 className='text-4xl font-medium mb-16'>
          {services[router.locale].h2}
        </h2>
        {services[router.locale].p}
        <div className='md:grid-cols-2 grid grid-cols-1 gap-x-12'>
          <div>
            {services[router.locale].leftList.map((paragraph) => paragraph)}
          </div>
          <div className='md:mt-0 mt-8'>
            {services[router.locale].rightList.map((paragraph) => paragraph)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
