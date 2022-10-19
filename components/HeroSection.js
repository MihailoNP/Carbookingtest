import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { herosection } from 'lib/content';

import heroStyles from 'styles/herosection.module.css';

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className={`${heroStyles.herosection} 2xl:px-0 md:py-0 block px-4 py-16 bg-slate-100`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        <div className='md:pr-8 xl:pr-16 max-w-md lg:max-w-screen-md xl:max-w-screen-lg'>
          <h1 className='md:text-5xl md:mb-10 mb-6 text-3xl font-medium'>
            {herosection[router.locale].h1}
          </h1>
          <h3 className='md:text-lg text-md text-neutral-400'>
            {herosection[router.locale].h3}
          </h3>
        </div>
        <div
          className={`${heroStyles.carContainer} md:flex hidden items-center justify-center relative`}
        >
          <div className='relative'>
            <Image
              src='/renault-megane.png'
              layout='fill'
              alt='renault megane'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
