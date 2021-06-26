import React, { Fragment } from 'react';

function TabComments() {
  return (
    <Fragment>
      <div className='p-4 tracking-wider text-font-title text-sm mb-1.5 border-l-3 border-yellow mb-8'>
        只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎
        <span className='text-yellow-dark'>聯絡提案人</span>！
      </div>
    </Fragment>
  );
}

export default TabComments;
