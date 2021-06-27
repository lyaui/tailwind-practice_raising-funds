import React from 'react';

export const SupportFormInput = ({ label, type, id }) => {
  return (
    <div className='mb-4'>
      <label className='block mb-2 text-font-title' htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className='py-2 px-4 bg-gray-form w-full tracking-wider rounded text-gray-placeholder'
        id={id}
      />
    </div>
  );
};

export const SupportFormSelector = ({ label, placeholder, id }) => {
  return (
    <div className='mb-4'>
      <label className='block mb-2 text-font-title' htmlFor={id}>
        {label}
      </label>
      <select
        className='py-2 px-4 bg-gray-form w-full tracking-wider rounded text-gray-placeholder'
        name={id}
        id={id}
      >
        <option value='' disabled selected>
          {placeholder}
        </option>
      </select>
    </div>
  );
};
