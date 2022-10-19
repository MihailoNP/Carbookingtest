import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { newsletter } from 'lib/content';
import Input from './common/Input';
import Button from './common/Button';
import CheckmarkSVG from 'public/svg/checkmarkIcon.svg';


const Newsletter = () => {
  const router = useRouter();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const onChange = ({ target: { value } }) => setEmail(value);


  const subscribe = async () => {
     await fetch('/api/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        collection: 'newsletter',
        data: { email },
      }),
    });
    setIsSubscribed(true);
  }

  return (
    <section className='2xl:px-0 px-4 bg-primary py-10'>
      <div className='container mx-auto'>
        <h3 className='text-2xl font-medium mb-8 text-white text-center'>
          {newsletter[router.locale].h3}
        </h3>

        <p className='text-white text-center mb-12'>
          {newsletter[router.locale].p}
        </p>

        <div className='sm:flex-nowrap flex flex-wrap justify-center items-center'>
          <Input
            className='sm:mr-4 w-80 bg-white rounded mr-0'
            type='email'
            name='email'
            placeholder={newsletter[router.locale].placeholder}
            value={email}
            onChange={onChange}
            displayLabel={false}
            disabled={isSubscribed}
          />

          <Button
            className='sm:mt-0 mt-4'
            label={!isSubscribed ? newsletter[router.locale].button : <div className='flex items-center text-white'> <CheckmarkSVG className='w-8 h-8 mr-2 stroke-white' />{newsletter[router.locale].subscribed}</div>}
            onClick={subscribe}
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
