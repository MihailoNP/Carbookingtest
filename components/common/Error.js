import React from 'react';
import { useRouter } from 'next/router';
import ExclemationSVG from 'public/svg/exclemationIcon.svg';

import errorstyles from 'styles/error.module.css';

const Error = ({ message }) => {
  const router = useRouter();

  return (
    <div className={`${errorstyles.error} relative`}>
      <ExclemationSVG className='h-6 w-6 cursor-pointer' />
      <div className={`${errorstyles.message} hidden`}>
        {message[router.locale]}
      </div>
    </div>
  );
};

export default Error;
