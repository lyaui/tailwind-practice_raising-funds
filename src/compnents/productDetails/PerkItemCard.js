import React from 'react';
import Badge from '../UI/Badge';

function PerkItemCard({ PerkItems }) {
  const { image, isLimitedTimeOffer, leftDays, title, price, sponsoredTimes, limitedAmount, desc } =
    PerkItems;
  return (
    <div className='border rounded-lg border-gray-cardBorder overflow-hidden mb-4'>
      <img src={image} alt={title} className='h-28 w-full object-cover' />
      <div className='px-4 py-2'>
        <div className='flex justify-between pb-2 border-b text-font-link tracking-wider'>
          {isLimitedTimeOffer && <span>限時優惠</span>}
          <span className='ml-auto'>{leftDays}</span>
        </div>
        <div className='text-lg font-bold tracking-wider text-font-title py-2'>{title}</div>
        <div className='mb-2'>
          <span className='font-BalooTamma text-2xl text-font-title font-bold'>NT$ {price}</span>
        </div>
        <div className='flex mb-2'>
          <Badge className='bg-gray-tabBorder text-gray mr-2'>
            已被贊助 <span>{sponsoredTimes}</span> 次
          </Badge>
          <Badge>
            限量 <span class='text-yellow'>{limitedAmount}</span> 個
          </Badge>
        </div>
        <div className='text-gray tracking-wider mb-4'> {desc}</div>
      </div>
    </div>
  );
}

export default PerkItemCard;
