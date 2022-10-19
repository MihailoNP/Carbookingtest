import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { footer, navigation } from 'lib/content';

import FacebookSVG from 'public/svg/facebookIcon.svg';
import InstagramSVG from 'public/svg/instagramIcon.svg';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className='2xl:px-0 px-4'>
      <div className='md:flex-row container mx-auto flex flex-col items-start justify-between py-16'>
        <div className='md:w-2/4 md:text-left text-center w-full p-4'>
          <Image
            src='/logo.png'
            alt='carbooking logo'
            width={150}
            height={75}
            priority
          />
          <p className='mt-8 md:pr-8 text-justify'>{footer[router.locale].p}</p>
        </div>
        <div className='md:w-2/4 flex items-start w-full'>
          <ul className='w-2/6 flex flex-col p-4'>
            <p className='font-medium mb-8'>{footer[router.locale].sitemap}</p>
            {navigation[router.locale].map((item, index) => (
              <Link href={item.url} key={index * Math.random()}>
                <a
                  className='block my-2 w-full overflow-hidden text-ellipsis'
                  title={item.name}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </ul>
          <div className='w-2/6 py-4'>
            <p className='font-medium mb-8 text-center'>
              {footer[router.locale].media}
            </p>
            <div className='sm:flex-row sm:items-start flex flex-col items-center justify-center'>
              <a href='https://www.facebook.com/carbookingmontenegro'><FacebookSVG className='sm:mr-1 mb-2' /></a>
              <a href="https://www.instagram.com/car_booking_montenegro/"><InstagramSVG className='sm:ml-1' /></a>
            </div>
          </div>
          <div className='md:items-start w-2/6 flex flex-col items-center justify-between p-4'>
            <div className='mb-4'>
              <Image
                src='/visa.jpeg'
                alt='master card logo'
                width={120}
                height={40}
              />
            </div>
            <Image
              src='/masterCard.jpeg'
              alt='master card logo'
              width={73}
              height={43}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
