import React from 'react';

function Card({ className, children }) {
  return (
    <div className={`p-4 border rounded-lg border-gray-cardBorder ${className && className}`}>
      {children}
    </div>
  );
}

export default Card;
