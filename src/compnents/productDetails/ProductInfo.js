import React from 'react';
import * as Icon from '../../compnents/Icons';

function productInfo({ target, currentAmount, remainingDays, sponsors, deadline }) {
  const icons = [
    { path: Icon.Badge, label: '榮獲大獎' },
    { path: Icon.Like, label: '品質保證' },
    { path: Icon.Blob, label: '創新突破' },
    { path: Icon.Crown, label: '頂級至尊' },
  ];
  const renderIcons = icons.map(({ path, label }) => (
    <img className='pr-6 py-4 cursor-pointer' src={path} alt={label} />
  ));
  return (
    <div className='col-span-5 text-font-link'>
      <span class='font-BalooTamma text-sm'>目標 ${target}</span>
      <span className='block font-BalooTamma text-font-title text-3xl font-bold py-1'>
        {currentAmount}
      </span>
      <div>
        <span class='font-BalooTamma text-sm'>贊助人數</span>
        <span className='block font-BalooTamma text-font-title text-3xl font-bold py-1'>
          {sponsors} 人
        </span>
      </div>
      <div>
        <span class='font-BalooTamma text-sm'>募資倒數</span>
        <span className='block font-BalooTamma text-font-title text-3xl font-bold py-1'>
          {remainingDays} 人
        </span>
      </div>
      <div className='flex'> {renderIcons}</div>
      <div className='bg-white py-3.5 px-4 border-l-3 border-yellow rounded-lg'>
        <p>專案募資中！</p>
        <p>
          在 <span>{deadline}</span> 募資結束前，您都可以贊助我們！
        </p>
      </div>
    </div>
  );
}

export default productInfo;
