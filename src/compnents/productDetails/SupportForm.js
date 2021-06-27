import React from 'react';
import * as Icon from '../Icons/index';
import classes from './SupportForm.module.css';
import { SupportFormInput, SupportFormSelector } from './SupportFormItem.js';

function SupportForm() {
  return (
    <div>
      <div className={classes.supportform}>
        <img className='m-auto mb-4' src={Icon.Heart} alt='贊助專案' />
        <span
          className={`text-center text-bold text-font-title text-2xl mb-2 tracking-wider ${classes.supportform__title}`}
        >
          贊助專案
        </span>
      </div>
      <form className='mt-20 tracking-wider'>
        <SupportFormSelector label='贊助方案' placeholder='請選擇一個方案' id='plan' />
        <SupportFormInput label='收件人姓名' type='text' id='name' />
        <SupportFormInput label='聯絡電話' type='tel' id='phone' />
        <SupportFormInput label='連絡信箱' type='email' id='email' />
        <SupportFormSelector label='付款方式' placeholder='信用卡付款' id='payway' />
      </form>
    </div>
  );
}

export default SupportForm;
