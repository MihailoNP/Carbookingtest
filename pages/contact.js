import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { contactpage, reservationpage } from 'lib/content';
import { onlyLettersAndSpaces, onlyNumbers, isEmail, inRange, isPhoneNumber } from 'lib/utils';
import Input from 'components/common/Input';
import Button from 'components/common/Button';


const contact = () => {
  const router = useRouter();

  const [customer, setCustomer] = useState({});
  const [error, setError] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = ({ target: { name, value } }) => {
    setCustomer({ ...customer, [name]: value });
  };

  const sendEmail = async () => {
    const obj = {};
    const isError = false;

    ['subject', 'name', 'email', 'state', 'years', 'message', "phoneNumber"].forEach((field) => {
      if (!customer[field] && field !== "phoneNumber") {
        if (!error) error = true;

        obj[field] = {
          message: {
            en: 'This field is required!',
            sr: 'Ovo polje je obavezno!',
          },
        };

        isError = true;
      } else if (field === "subject" || field === "name" || field === "state") {
        error = !onlyLettersAndSpaces(customer[field]);
        if (error) {
          obj[field] = {
            message: {
              en: 'Only letters are allowed!',
              sr: 'Dozvoljena su samo slova!',
            },
          };
        }
      } else if (field === "years") {
        error = !onlyNumbers(customer[field]) && inRange(Number(customer[field]), 18, 99);
        if (error) {
          obj[field] = {
            message: {
              en: 'Only numbers between 18 and 99 are allowed!',
              sr: 'Dozvoljeni su samo brojevi izmedju 18 i 99!',
            },
          };
        }
      } else if (field === "email") {
        error = !isEmail(customer[field]);
        if (error) {
          obj[field] = {
            message: {
              en: 'Please type in correct email format!',
              sr: 'Unesite pravilan format email-a!',
            },
          };
        }
      } else if (field === "message") {
        if (customer[field].length < 30) {
          obj[field] = {
            message: {
              en: 'Message must contain at least 30 characters!',
              sr: 'Poruka mora imati bar 30 slova!',
            },
          };
        }
      } else if (customer[field] && field === "phoneNumber") {
        error = !isPhoneNumber(customer[field]);
        if (error) {
          obj[field] = {
            message: {
              en: 'Phone number must be of format: +38268558943!',
              sr: 'Broj telefona mora biti sledeceg formata +38268558943',
            },
          };
        }

        console.log(error)
      } 

    });

    if (isError) {
      setError(obj);
      return;
    } else {
      setError({});
    }

    const html = `<ul style="background-color: rgb(241, 245, 249); border-radius: 8px; list-style: none; padding: 0.5rem;">
    <li>Ime: ${customer.name}</li>
    <li>E-mail: ${customer.email}</li>
    <li>Broj Godina: ${customer.years}</li>
    <li>Drzava: ${customer.state}</li>
    <li>Broj Telefona: ${customer.phoneNumber}</li>
    <li>Poruka: ${customer.message}</li>
  </ul>`;

    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: customer.subject,
        html,
      }),
    };
    await fetch('/api/sendEmail', requestOptions);

    setSent(true);
  };

  return (
    <section className='2xl:px-0 block px-4 bg-slate-100'>
      {sent ? (
        <p className='text-3xl text-medium text-secondary text-center p-40'>
          {contactpage[router.locale].thankyou}
        </p>
      ) : (
        <>
          <div className='container mx-auto py-16'>
            <p className='text-2xl text-medium mb-4'>
              {contactpage[router.locale].title}
            </p>

            <div className='flex flex-col items-center my-16'>
              <Input
                className='md:w-2/4 w-full'
                type='text'
                label={contactpage[router.locale].subject}
                placeholder={contactpage[router.locale].subject}
                name='subject'
                value={customer.subject}
                onChange={onChange}
                error={error.subject}
                required
              />
              <Input
                className='md:w-2/4 w-full'
                type='text'
                label={reservationpage[router.locale].form.fullName}
                placeholder={reservationpage[router.locale].form.fullName}
                name='name'
                value={customer.name}
                onChange={onChange}
                error={error.name}
                required
              />
              <div className='md:w-2/4 flex flex-wrap items-center justify-center w-full'>
                <Input
                  className='md:w-2/4 w-full'
                  type='text'
                  label={reservationpage[router.locale].form.email}
                  placeholder={reservationpage[router.locale].form.email}
                  name='email'
                  value={customer.email}
                  onChange={onChange}
                  error={error.email}
                  required
                />
                <Input
                  className='md:w-2/4 w-full'
                  type='text'
                  label={reservationpage[router.locale].form.years}
                  placeholder={reservationpage[router.locale].form.years}
                  name='years'
                  value={customer.years}
                  onChange={onChange}
                  error={error.years}
                  required
                />
              </div>
              <div className='md:w-2/4 flex flex-wrap items-center justify-center w-full'>
                <Input
                  className='md:w-2/4 w-full'
                  type='text'
                  label={reservationpage[router.locale].form.state}
                  placeholder={reservationpage[router.locale].form.state}
                  name='state'
                  value={customer.state}
                  onChange={onChange}
                  error={error.state}
                  required
                />
                <Input
                  className='sm:w-2/4 w-full'
                  type='text'
                  label={reservationpage[router.locale].form.phoneNumber}
                  placeholder='+38268558943'
                  name='phoneNumber'
                  value={customer.phoneNumber}
                  onChange={onChange}
                  error={error.phoneNumber}
                />
              </div>
              <Input
                className='md:w-2/4 w-full'
                type='text'
                label={reservationpage[router.locale].form.message}
                placeholder={reservationpage[router.locale].form.message}
                name='message'
                value={customer.message}
                onChange={onChange}
                error={error.message}
                required
              />
            </div>

            <Button
              type='primary'
              className='block mx-auto p-2'
              label={contactpage[router.locale].button}
              onClick={sendEmail}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default contact;
