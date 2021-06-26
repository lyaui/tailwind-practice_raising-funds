import React from 'react';

function Badge({ className, children }) {
  const classes = className ? className : 'bg-gray text-white';
  return <div className={`w-max tracking-wide px-3 rounded ${classes}`}>{children}</div>;
}

export default Badge;
