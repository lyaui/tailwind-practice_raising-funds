import React from 'react';
import Card from '../UI/Card';

function CommentCard({ comment }) {
  const { user, userAvatar, date, comment: userComment, reply } = comment;
  const renderReply = (
    <div className='p-4 bg-gray-bg rounded mt-4 tracking-wider'>
      <span className='block text-sm text-yellow-dark mb-1'>提案者回覆</span>
      <p className='text-font-title'>{reply}</p>
    </div>
  );
  return (
    <Card className='p-4 mb-4'>
      <div className='flex items-center mb-4'>
        <img className='rounded-full' src={userAvatar} alt={user} />
        <div className='ml-4'>
          <span className='block text-xl text-font-title mb-1 tracking-wider'>{user}</span>
          <span className='block text-sm text-gray tracking-widest'>{date}</span>
        </div>
      </div>
      <p className='tracking-wider text-font-title'>{userComment}</p>
      {reply && renderReply}
    </Card>
  );
}

export default CommentCard;
