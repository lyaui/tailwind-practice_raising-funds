import React from 'react';

function Card({ children }) {
  return <div class='p-4 border rounded-lg border-gray-cardBorder'>{children}</div>;
}

export default Card;
