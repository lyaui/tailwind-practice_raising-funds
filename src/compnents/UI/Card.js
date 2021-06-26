import React from 'react';

function Card({ className, children }) {
  return (
    <div class={`p-4 border rounded-lg border-gray-cardBorder ${className && className}`}>
      {children}
    </div>
  );
}

export default Card;
