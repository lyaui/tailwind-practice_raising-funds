import React from 'react';

function Badge({ children }) {
  // dark / light @apply
  //   const darkClasses = '';
  //   const lightClasses = '';
  return (
    <div className='w-max tracking-wide px-3 rounded text-bold bg-gray text-white'>{children}</div>
  );
}

export default Badge;
