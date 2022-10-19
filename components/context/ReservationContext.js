import React, { useState, createContext, useEffect } from 'react';
import { extras } from 'lib/content';

export const ReservationContext = createContext();

const ReservationProvider = ({ children }) => {
  const [data, setData] = useState({
    pickupTime: '12:00',
    returnTime: '12:00',
    extras: {},
  });

  useEffect(() => {
    formExtras();
  }, []);

  const formExtras = () => {
    let extrasObj = {};

    extras.en.insurance.forEach(({ name, price, maxPrice }) => {
      extrasObj[name] = { selected: false };

      if (price) {
        extrasObj[name].price = price;
      }

      if (maxPrice) {
        extrasObj[name].maxPrice = maxPrice;
      }
    });

    extras.en.extras.forEach(({ name, price, maxPrice, type }) => {
      extrasObj[name] = {};

      if (price) {
        extrasObj[name].price = price;
      }

      if (maxPrice) {
        extrasObj[name].maxPrice = maxPrice;
      }

      if (type === 'check') {
        extrasObj[name].selected = false;
      } else {
        extrasObj[name].value = 0;
      }
    });

    setData({ ...data, extras: extrasObj });
  };

  return (
    <ReservationContext.Provider value={{ data, setData }}>
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;
