import React from 'react';
import Car from 'components/Car';

const FirstStep = ({ data, error, router }) => {
  return (
    <div
      className={`xl:grid-cols-3 md:gap-16 sm:grid-cols-2 grid grid-cols-1 w-max gap-8 mx-auto ${
        !error && 'mt-24'
      }`}
    >
      {data.map((obj) => (
        <Car data={obj} slider={false} />
      ))}
    </div>
  );
};

export default FirstStep;
