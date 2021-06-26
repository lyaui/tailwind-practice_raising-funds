import React from 'react';

function ProcessBar({ targetPercent }) {
  const percentage = `${targetPercent * 100}%`;
  return (
    <div className='h-4 bg-gray-bar rounded-lg mb-5 overflow-hidden'>
      <div className='bg-yellow h-full flex' style={{ width: percentage }}>
        <span className='text-xs m-auto'>{percentage}</span>
      </div>
    </div>
  );
}

export default ProcessBar;
