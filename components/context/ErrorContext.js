import React, { useState, useEffect, useContext, createContext } from 'react';
import { ReservationContext } from './ReservationContext';
import { onlyLettersAndSpaces } from 'lib/utils';

export const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [errorObj, setErrorObj] = useState({});

  const { data } = useContext(ReservationContext);

  useEffect(() => {
    if (!error) {
      setErrorObj({});
    }
  }, [error]);

  const parseError = (fields) =>
    new Promise((resolve) => {
      const obj = { ...errorObj };
      const error = false;

      fields.forEach((field) => {
        if (!data[field]) {
          if (!error) error = true;

          obj[field] = {
            message: {
              en: 'This field is required!',
              sr: 'Ovo polje je obavezno!',
            },
          };

          if (field == 'car') {
            obj[field] = {
              message: {
                en: 'Car must be selected!',
                sr: 'Vozilo mora biti selektovano!',
              },
            };
          }
        } else if (field === "pickupLocation" || field === "returnLocation") {
          error = !onlyLettersAndSpaces(data[field]);
          if (error) {
            obj[field] = {
              message: {
                en: 'Only letters are allowed!',
                sr: 'Dozvoljena su samo slova!',
              },
            };
          }
        } else if (obj[field]) {
          delete obj[field];
        }
      });

      setErrorObj(obj);
      setError(error);

      resolve(error);
    });

  return (
    <ErrorContext.Provider value={{ error, setError, errorObj, parseError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
