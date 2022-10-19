export const timeValues = [
  { label: '00:00' },
  { label: '00:30' },
  { label: '01:00' },
  { label: '01:30' },
  { label: '02:00' },
  { label: '02:30' },
  { label: '03:00' },
  { label: '03:30' },
  { label: '04:00' },
  { label: '04:30' },
  { label: '05:00' },
  { label: '05:30' },
  { label: '06:00' },
  { label: '06:30' },
  { label: '07:00' },
  { label: '07:30' },
  { label: '08:00' },
  { label: '08:30' },
  { label: '09:00' },
  { label: '09:30' },
  { label: '10:00' },
  { label: '10:30' },
  { label: '11:00' },
  { label: '11:30' },
  { label: '12:00' },
  { label: '12:30' },
  { label: '13:00' },
  { label: '13:30' },
  { label: '14:00' },
  { label: '14:30' },
  { label: '15:00' },
  { label: '15:30' },
  { label: '16:00' },
  { label: '16:30' },
  { label: '17:00' },
  { label: '17:30' },
  { label: '18:00' },
  { label: '18:30' },
  { label: '19:00' },
  { label: '19:30' },
  { label: '20:00' },
  { label: '20:30' },
  { label: '21:00' },
  { label: '21:30' },
  { label: '22:00' },
  { label: '22:30' },
  { label: '23:00' },
  { label: '23:30' },
];

export const getLocales = async (locale, fileName) => {
  let data = await fetch(
    `http://localhost:3000/locales/${locale}/${fileName}.json`
  );
  data = await data.json();

  return data;
};

export const onlyLettersAndSpaces = (str) => {
  return /^[A-Za-z\s]*$/.test(str);
}

export const onlyNumbers = (str) => {
  return /^[0-9\s]*$/.test(str);
}

export const isEmail = (str) => {
  return /^\S+@\S+\.\S+$/.test(str);
}

export const inRange = (num, min, max) => {
  return num >= min && num <= max;
}

export const isPhoneNumber = (str) => {
  return /^\+([0-9]{10})([0-9]+)$/.test(str);
}

export const USD_VALUE = 1.01;
