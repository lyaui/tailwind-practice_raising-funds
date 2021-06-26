import React from 'react';
import Card from '../UI/Card';

function ProcessCard({ processItem }) {
  const { image, title, date, desc } = processItem;
  return (
    <Card className='mb-4 overflow-hidden flex'>
      <img className='w-56' src={image} alt={title} />
      <div className='p-4 flex flex-col'>
        <div className='mb-4 text-gray text-sm'>
          <div className='text-base text-font-title font-bold tracking-wider'>{title}</div>
          <span className='mb-2 font-BalooTamma block'>{date}</span>
          <p className='tracking-wider'>{desc}</p>
        </div>
        <button className='cursor-pointer w-min text-left font-BalooTamma font-bold text-yellow-dark'>
          MORE
        </button>
      </div>
    </Card>
  );
}

export default ProcessCard;
