import React from 'react';

function Button({ children, className }) {
  const classes = `px-8 py-2 rounded-3xl tracking-wider cursor-pointer font-bold ${className}`;
  return <button className={classes}>{children}</button>;
}

export default Button;