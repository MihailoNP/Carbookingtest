import React from 'react';
import DatePicker from 'react-datepicker';
import Autocomplete from 'react-autocomplete';
import Error from 'components/common/Error';
import LocationSVG from 'public/svg/locationIcon.svg';
import ClockSVG from 'public/svg/clockIcon.svg';
import CalendarSVG from 'public/svg/calendarIcon.svg';
import MailSVG from 'public/svg/mailIcon.svg';

const Input = ({
  className = '',
  type = '',
  label = '',
  name = '',
  value = '',
  defaultValue = '',
  placeholder = '',
  onChange = () => {},
  items = [],
  minDate = new Date(),
  error = null,
  required = false,
  displayLabel = true,
  disabled = false,
}) => {
  const formInput = () => {
    const renderItem = (item, isHighlighted) => (
      <div
        className={isHighlighted ? 'text-white p-2' : 'p-2'}
        style={{
          background: isHighlighted ? '#2f79b5 ' : 'white',
        }}
      >
        {item.label}
      </div>
    );

    const renderInput = (props) => (
      <input
        {...props}
        name={name}
        placeholder={type === 'location' ? 'Podgorica' : '12:00'}
        className='w-full outline-0'
      />
    );

    const autoComplete = (
      <Autocomplete
        wrapperProps={{ className: 'w-full' }}
        id={name}
        getItemValue={(item) => item.label}
        items={items.filter((i) =>
          type === 'time' ? !i.label.includes(value) : i.label.includes(value)
        )}
        renderItem={renderItem}
        name={name}
        value={type === 'time' ? (value ? value : defaultValue) : value}
        onChange={type!== "time" ? onChange : () => {}}
        onSelect={(value) => onChange({ target: { name, value } })}
        renderInput={renderInput}
        renderMenu={function (items, value, style) {
          return value ? (
            <div
              className='z-50'
              style={{ ...style, ...this.menuStyle }}
              children={items}
            />
          ) : (
            <></>
          );
        }}
      />
    );

    if (type === 'date') {
      return (
        <>
          <CalendarSVG className={svgClassName} />
          <DatePicker
            wrapperClassName='w-full'
            className='outline-0 w-full'
            name={name}
            value={value}
            selected={value}
            onChange={(date) => onChange({ target: { name, value: date } })}
            dateFormat='dd/MM/yyyy'
            minDate={minDate}
            placeholderText='dd/mm/yyyy'
          />
        </>
      );
    }

    if (type === 'time') {
      return (
        <>
          <ClockSVG className={svgClassName} />
          {autoComplete}
        </>
      );
    }

    if (type === 'email') {
      return (
        <>
          <MailSVG className={svgClassName} />{' '}
          <input
            type='email'
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className='w-full outline-0 bg-white'
            disabled={disabled}
          />
        </>
      );
    }

    if (type === 'text') {
      return (
        <input
          type='text'
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className='w-full outline-0 bg-white rounded p-2'
          disabled={disabled}
        />
      );
    }

    return (
      <>
        <LocationSVG className={svgClassName} /> {autoComplete}
      </>
    );
  };

  const svgClassName = 'mr-2 w-5 stroke-primary';

  return (
    <div
      className={`${className} flex flex-col items-start justify-center p-2`}
    >
      {displayLabel && (
        <label
          htmlFor={name}
          className={`${
            type === 'time' && 'sm:flex hidden'
          } flex items-center mb-2 text-slate-400 w-full`}
          title={label}
        >
          <p className='whitespace-nowrap'>
            {label}
          </p>
          &nbsp;
          {required && !error && <span className='text-primary'>*</span>}
          {error && <Error message={error.message} />}
        </label>
      )}

      <div className='flex items-center justify-start w-full'>
        {formInput()}
      </div>
    </div>
  );
};

export default Input;
