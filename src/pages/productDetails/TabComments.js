import React, { Fragment } from 'react';
import userAvatar1 from '../../assets/images/user_img01.jpeg';
import userAvatar2 from '../../assets/images/user_img02.jpeg';

function TabComments() {
  const comments = [
    {
      uset: '廖小杰',
      userAvatar: userAvatar1,
      date: '2020年5月22日 11:32',
      comment: '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
      reply: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿',
    },
    {
      uset: '卡阿伯',
      userAvatar: userAvatar2,
      date: '2020年5月22日 11:32',
      comment: '希望有更多花色可以選擇！我女兒最近喜歡綠色',
    },
    {
      uset: '賈師',
      userAvatar: userAvatar2,
      date: '2020年5月22日 11:32',
      comment: '可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣',
    },
    {
      uset: '俊俊',
      userAvatar: userAvatar2,
      date: '2020年5月22日 11:32',
      comment: 'test123 看一下我是不是真的可以留言',
    },
  ];
  return (
    <Fragment>
      <div className='p-4 tracking-wider text-font-title text-sm border-l-3 border-yellow mb-8'>
        只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎
        <span className='text-yellow-dark'>聯絡提案人</span>！
      </div>
    </Fragment>
  );
}

export default TabComments;
