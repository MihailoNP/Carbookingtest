import React from 'react';
import { extras, reservationpage } from 'lib/content';
import Extra from 'components/Extra';

const SecondStep = ({ data, setData, router }) => {
  const selectExtra = ({ name, price, maxPrice }) => {
    const extras = { ...data.extras };

    extras[name] = {
      selected: !extras[name].selected,
    };

    setData({
      ...data,
      extras: {
        ...extras,
      },
    });
  };

  const onChange = ({ name }, type) => {
    const currentValue = data.extras[name].value;
    const newValue = 0;

    console.log(type, currentValue);
    if (type === 'add') {
      if (currentValue === 3) {
        return;
      }

      if (currentValue >= 0) {
        newValue = currentValue + 1;
      }
    } else {
      if (currentValue > 0 && currentValue <= 3) {
        newValue = currentValue - 1;
      }
    }

    setData({
      ...data,
      extras: {
        ...data.extras,
        [name]: { ...extras[name], value: newValue },
      },
    });
  };

  const border = <div className='w-full my-4 border-b-2 border-gray-300'></div>;

  return (
    <div className='mt-24'>
      <p className='text-2xl text-medium mb-4'>
        {reservationpage[router.locale].included}
      </p>

      <div className='lg:grid-cols-[250px_250px_250px] sm:grid-cols-[250px_250px] sm:justify-start grid grid-cols-[250px] justify-center gap-4'>
        {extras[router.locale].included.map((obj) => (
          <Extra data={obj} selected={true} />
        ))}
      </div>

      {border}

      <p className='text-2xl text-medium mb-4'>
        {reservationpage[router.locale].insurance}
      </p>

      <div className='sm:grid-cols-[250px_250px] sm:justify-start grid grid-cols-[250px] gap-4 justify-center'>
        {extras[router.locale].insurance.map((obj) => (
          <Extra
            data={obj}
            selected={data.extras[obj.name] && data.extras[obj.name].selected}
            selectExtra={() => selectExtra(obj)}
          />
        ))}
      </div>

      {border}
      <div className='xl:grid-cols-6 sm:grid-cols-4 sm:justify-start grid grid-cols-2 gap-4 justify-center'>
        {extras[router.locale].extras
          .filter((obj) => obj.gratis)
          .map((obj) =>
            obj.type === 'number' ? (
              <Extra
                className='h-52 !justify-center !items-center'
                data={obj}
                value={data.extras[obj.name] && data.extras[obj.name].value}
                addValue={() => onChange(obj, 'add')}
                subtractValue={() => onChange(obj, 'sub')}
              />
            ) : (
              <Extra
                className='h-52 !justify-center !items-center'
                data={obj}
                selected={
                  data.extras[obj.name] && data.extras[obj.name].selected
                }
                selectExtra={() => selectExtra(obj)}
              />
            )
          )}
      </div>
      <div className='xl:grid-cols-[250px_250px_250px_250px] lg:grid-cols-[250px_250px_250px] sm:grid-cols-[250px_250px] sm:justify-start grid grid-cols-[250px] gap-4 mt-4 justify-center'>
        {extras[router.locale].extras
          .filter((obj) => !obj.gratis)
          .map((obj) => (
            <Extra
              className='!justify-center !items-center'
              data={obj}
              selected={data.extras[obj.name] && data.extras[obj.name].selected}
              selectExtra={() => selectExtra(obj)}
            />
          ))}
      </div>
    </div>
  );
};

export default SecondStep;
