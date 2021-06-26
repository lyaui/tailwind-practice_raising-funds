import React from 'react';
import ProposerInfo from '../../compnents/productDetails/ProposerInfo';
import PerkItemCard from '../../compnents/productDetails/PerkItemCard';
import PerkImage from '../../assets/images/plan_img.jpeg';
import ProposerImg from '../../assets/images/store_img.jpeg';

function PerkInfo() {
  const proposerInfo = {
    avatar: ProposerImg,
    project: 1,
    name: '缺錢事務所',
    intro: '需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！',
  };
  const perkItems = {
    image: PerkImage,
    isLimitedTimeOffer: true,
    leftDays: '2 days 20:05:20',
    title: '買一送一，只有兩百組別錯過',
    price: 1600,
    sponsoredTimes: 88,
    limitedAmount: 200,
    desc: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
  };
  const renderPerkItems = [...Array(2)].map((item, idx) => (
    <PerkItemCard className='mb-4' PerkItems={perkItems} key={idx} />
  ));
  return (
    <div className='col-span-4'>
      <ProposerInfo proposerInfo={proposerInfo} />
      {renderPerkItems}
    </div>
  );
}

export default PerkInfo;
