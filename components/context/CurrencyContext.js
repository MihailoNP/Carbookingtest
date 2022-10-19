import React, { useState, createContext, useEffect } from 'react';
import { USD_VALUE } from '../../lib/utils';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('EUR');

  const formatCurrency = (price) =>
    currency === 'EUR'
      ? `€${Number(price).toFixed(2)}`
      : `$${Number(price * USD_VALUE).toFixed(2)}`;

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
