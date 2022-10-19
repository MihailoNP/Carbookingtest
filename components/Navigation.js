import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { navigation } from 'lib/content';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from 'components/context/LanguageContext';
import { CurrencyContext } from './context/CurrencyContext';

import DollarSVG from 'public/svg/dollarIcon.svg';
import EuroSVG from 'public/svg/euroIcon.svg';

import navigationStyles from 'styles/navigation.module.css';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const router = useRouter();

  const { language } = useContext(LanguageContext);
  const { currency, setCurrency } = useContext(CurrencyContext);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const selectDollar = () => setCurrency('USD');
  const selectEur = () => setCurrency('EUR');

  const activeClass = 'font-medium text-sky-800';

  return (
    <nav
      className={`${
        navigationStyles.navbar
      } 2xl:px-0 lg:block lg:border-0 relative flex flex-col py-2.5 px-4 bg-slate-100 rounded-md  ${
        isNavOpen && 'border-2 bg-white'
      } `}
    >
      <div className='container mx-auto flex flex-wrap justify-between items-center'>
        <Link href='/'>
          <Image
            className='cursor-pointer'
            src='/logo.png'
            alt='carbooking logo'
            width={100}
            height={50}
            priority
          />
        </Link>

        <div className='lg:block hidden absolute left-1/2 -translate-x-1/2 w-full w-auto left-1/2 -translate-x-1/2'>
          <ul className='flex'>
            {navigation[router.locale].map((item, index) => (
              <Link href={item.url} key={index * Math.random()}>
                <a
                  className={`${
                    router.asPath === item.url && activeClass
                  } block ${
                    index === navigation[router.locale].length - 1
                      ? 'ml-4'
                      : index === 0
                      ? 'mr-4'
                      : 'mx-4'
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div className='lg:flex hidden items-center justify-between'>
          <div className='flex items-center justify-center mr-4'>
            <Link href='/' locale='en'>
              <a className={`flex items-center justify-center mr-4 md:mr-6`}>
                <img className='md:w-4 w-8 mr-2' src='/svg/uk-flag.svg' />
                <span
                  className={`${
                    language === 'English' && activeClass
                  } hidden sm:inline`}
                >
                  Eng
                </span>
              </a>
            </Link>
            <Link href='/' locale='sr'>
              <a className={`flex items-center justify-center`}>
                <img
                  className='md:w-4 sm:mr-2 w-8 mr-0'
                  src='/svg/mne-flag.svg'
                />
                <span
                  className={`${
                    language === 'Crnogorski' && activeClass
                  } hidden sm:inline`}
                >
                  Mne
                </span>
              </a>
            </Link>
          </div>

          <div className='flex items-center justify-center'>
            <DollarSVG
              className={`${
                currency === 'USD' && 'stroke-2'
              } h-6 w-6 mr-4 cursor-pointer`}
              onClick={selectDollar}
            />
            <EuroSVG
              className={`${
                currency === 'EUR' && 'stroke-2'
              } h-6 w-6 mr-4 cursor-pointer`}
              onClick={selectEur}
            />
          </div>
        </div>

        <button className='lg:hidden' onClick={toggleNav}>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
          <svg
            className='hidden w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>

        <div
          className={`${navigationStyles.mobile} ${
            !isNavOpen && 'hidden'
          } lg:hidden mt-4 w-full`}
        >
          <ul className='flex flex-col'>
            {navigation[router.locale].map((item, index) => (
              <Link href={item.url} key={index * Math.random()}>
                <a
                  className={`${
                    router.asPath === item.url && activeClass
                  } block p-2`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </ul>
          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center mr-4'>
              <Link href='/' locale='en'>
                <a className={`flex items-center justify-center mr-4 md:mr-6`}>
                  <img className='md:w-4 w-8 mr-2' src='/svg/uk-flag.svg' />
                  <span
                    className={`${
                      language === 'English' && activeClass
                    } hidden sm:inline`}
                  >
                    Eng
                  </span>
                </a>
              </Link>
              <Link href='/' locale='sr'>
                <a className={`flex items-center justify-center`}>
                  <img
                    className='md:w-4 sm:mr-2 w-8 mr-0'
                    src='/svg/mne-flag.svg'
                  />
                  <span
                    className={`${
                      language === 'Crnogorski' && activeClass
                    } hidden sm:inline`}
                  >
                    Mne
                  </span>
                </a>
              </Link>
            </div>

            <div className='flex items-center justify-center'>
              <DollarSVG
                className={`${
                  currency === 'USD' && 'stroke-2'
                } h-6 w-6 mr-4 cursor-pointer`}
                onClick={selectDollar}
              />
              <EuroSVG
                className={`${
                  currency === 'EUR' && 'stroke-2'
                } h-6 w-6 cursor-pointer`}
                onClick={selectEur}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
