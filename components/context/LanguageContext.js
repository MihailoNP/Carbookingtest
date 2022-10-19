import React, { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');
  const router = useRouter();

  useEffect(() => {
    if (router.locale === 'sr') setLanguage('Crnogorski');
    else setLanguage('English');
  }, [router]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
