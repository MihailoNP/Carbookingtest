import React from 'react';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import LanguageProvider from 'components/context/LanguageContext';
import ReservationProvider from 'components/context/ReservationContext';
import CurrencyProvider from './context/CurrencyContext';
import ErrorProvider from './context/ErrorContext';

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <ReservationProvider>
          <ErrorProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </ErrorProvider>
        </ReservationProvider>
      </CurrencyProvider>
    </LanguageProvider>
  );
};

export default Layout;
