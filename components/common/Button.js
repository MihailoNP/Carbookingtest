import React from 'react';

const Button = ({ className, type, label, onClick }) => {
  return (
    <button
      className={`${
        type === 'primary' ? 'bg-primary' : 'bg-secondary'
      } ${className} text-white rounded px-8 py-2 font-medium uppercase`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
