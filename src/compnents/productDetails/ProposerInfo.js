import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Card from '../UI/Card';

function ProposerInfo({ proposerInfo }) {
  const { avatar, project, name, intro } = proposerInfo;
  return (
    <Card className='mb-8'>
      <div className='flex items-center mb-4'>
        <img
          src={avatar}
          alt={name}
          className='rounded-full border-yellow border-3 cursor-pointer'
        />
        <div className='ml-4'>
          <p className='text-xl text-font-title tracking-widest'>{name}</p>
          <p className='tracking-wider text-gray'>
            已發起 <span className='font-bold'>{project}</span> 個專案
          </p>
        </div>
      </div>
      <FontAwesomeIcon icon={['fal', 'coffee']} />
      <div className='tracking-wider text-gray mb-4'>{intro}</div>
      <div className='flex'>
        <div className='bg-gray w-7.5 h-7.5 rounded-full flex items-center justify-center cursor-pointer text-white mr-2'>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className='bg-gray w-7.5 h-7.5 rounded-full flex items-center justify-center cursor-pointer text-white'>
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </Card>
  );
}

export default ProposerInfo;
