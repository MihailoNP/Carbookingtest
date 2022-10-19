import React from 'react';
import { useRouter } from 'next/router';
import Car from 'components/Car';
import Carousel from 'react-multi-carousel';
import { carssection } from 'lib/content';

import carsStyles from 'styles/cars.module.css';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1600, min: 1280 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  smallLaptop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  draggable: true,
  swipeable: true,
  keyBoardControl: true,
  minimumTouchDrag: 50,
  responsive: responsive,
  slidesToSlide: 0,
  itemClass: 'image-item',
};

const Cars = ({ data, limit }) => {
  const router = useRouter();

  return (
    <secton className='xl:px-0 block bg-slate-100 pt-24 pb-16 px-4'>
      <div className='container mx-auto flex flex-col'>
        <h2 className='text-4xl font-medium mb-8'>
          {carssection[router.locale].h2}
        </h2>
        <p className='text-base mb-16'>{carssection[router.locale].p}</p>

        <Carousel {...carouselParams}>
          {data.slice(0, limit).map((carData) => (
            <div className={carsStyles.slide}>
              <Car data={carData} />
            </div>
          ))}
        </Carousel>
      </div>
    </secton>
  );
};

export default Cars;
