import React from 'react';

function ProcessCard({ processItem }) {
  const { image, titile, date, desc } = processItem;
  return <div>{(image, titile, date, desc)}</div>;
}

export default ProcessCard;
