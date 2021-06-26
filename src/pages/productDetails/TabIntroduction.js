import React, { Fragment } from 'react';
import ProductImg1 from '../../assets/images/p1.jpeg';
import ProductImg2 from '../../assets/images/p2.jpeg';

function TabIntroduction() {
  return (
    <Fragment>
      <img src={ProductImg1} className='w-full mb-6' alt='' />
      <h3 className='font-bold tracking-wider text-font-title text-2xl px-4 mb-1.5 border-l-3 border-yellow'>
        施了魔法的照片
      </h3>
      <p className='text-font-title leading-8 mb-6'>
        受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
      </p>
      <img src={ProductImg2} className='w-full mb-6' alt='' />
      <h3 className='font-bold tracking-wider text-font-title text-2xl px-4 mb-1.5 border-l-3 border-yellow'>
        留下當下的美好
      </h3>
      <p className='text-font-title leading-8'>
        受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
      </p>
    </Fragment>
  );
}

export default TabIntroduction;
