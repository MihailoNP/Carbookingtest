import React from 'react';
import { useRouter } from 'next/router';
import StarSVG from 'public/svg/starIcon.svg';
import Image from 'next/image';
import { testemonials } from 'lib/content';

const shimmer = (w, h) => `
<svg class="absolute text-gray-400 -left-1" width=${w} height=${h} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const Testemonials = () => {
  const router = useRouter();

  return (
    <section
      className='2xl:px-0 block bg-slate-50 pt-24 pb-16 px-4'
      id='testemonials'
    >
      <div className='container mx-auto flex flex-col'>
        <h2 className='text-4xl font-medium mb-8'>
          {testemonials[router.locale].h2}
        </h2>

        <p className='text-base mb-16'>{testemonials[router.locale].p}</p>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
          {testemonials[router.locale].testemonials.map((obj) => (
            <div className='h-max py-8 px-4 shadow-md rounded-md bg-white'>
              <div className='w-full flex justify-start mb-4'>
                {[...Array(5).keys()].map(() => (
                  <StarSVG className='h-6 w-6 mr-2 fill-secondary' />
                ))}
              </div>
              <p className='w-full text-justify mb-4 text-slate-500'>
                {obj.review}
              </p>
              <div className='w-full flex justify-start items-center'>
                <Image
                  src={obj.img}
                  layout='fixed'
                  width={40}
                  height={40}
                  alt='testemonial'
                  placeholder='blur'
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(40, 40)
                  )}`}
                  className='rounded-full'
                />

                <p className='ml-4'>{obj.userLine}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
