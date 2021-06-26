import React from 'react';
import Badge from '../../compnents/UI/Badge.js';
import ProductInfo from '../../compnents/productDetails/ProductInfo';
import ProductInfoTabs from '../../compnents/productDetails/ProductInfoTabs.js';
import PriductImg from '../../assets/images/produt_image.jpeg';

function ProductDetails() {
  const product = {
    title: '拍出會動的照片｜LivePhotos 魔法拍立得',
    name: 'LivePhotos 魔法拍立得',
    cate: '魔法科技',
    img: PriductImg,
    target: 600000,
    currentAmount: 280047,
    targetPercent: 0.41,
    remainingDays: 27,
    sponsors: 1374,
    deadline: '2021/06/14 23:59',
  };
  return (
    <div className='bg-gray-bg'>
      <div className='container py-12'>
        <Badge>{product.cate}</Badge>
        <h2 className='text-3xl text-font-title font-bold tracking-widest mb-6'>{product.title}</h2>
        <div className='grid grid-cols-12 gap-x-6'>
          <img src={product.img} alt={product.name} className='col-span-7 rounded-4xl' />
          <ProductInfo
            target={product.target}
            targetPercent={product.targetPercent}
            currentAmount={product.currentAmount}
            remainingDays={product.remainingDays}
            sponsors={product.sponsors}
            deadline={product.deadline}
          />
        </div>
      </div>
      <ProductInfoTabs className='col-span-5' />
    </div>
  );
}

export default ProductDetails;
