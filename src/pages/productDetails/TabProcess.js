import React from 'react';
import ProcessCard from '../../compnents/productDetails/ProcessCard.js';
import ProjectProcerssImg1 from '../../assets/images/news01.jpeg';
import ProjectProcerssImg2 from '../../assets/images/news02.jpeg';
import ProjectProcerssImg3 from '../../assets/images/news03.jpeg';

function TabProcess() {
  const processItems = [
    {
      image: ProjectProcerssImg1,
      titile: '高雄體驗會｜免費參加送帆布袋',
      date: '2021-6-20',
      desc: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    },
    {
      image: ProjectProcerssImg2,
      titile: '高雄體驗會｜免費參加送帆布袋',
      date: '2021-6-20',
      desc: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    },
    {
      image: ProjectProcerssImg3,
      titile: '高雄體驗會｜免費參加送帆布袋',
      date: '2021-6-20',
      desc: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    },
  ];

  const renderProcessItems = processItems.map((item, idx) => (
    <ProcessCard processItem={item} key={idx} />
  ));
  return <div>{renderProcessItems}</div>;
}

export default TabProcess;
