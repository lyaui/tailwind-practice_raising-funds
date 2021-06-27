import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import Button from '../UI/Button';

function Navbar() {
  // TODO btn
  const navItems = [
    { label: '關於', path: '/' },
    { label: '挖寶', path: '/' },
    { label: '我有個大膽的想法', path: '/' },
  ];
  const renderNavItems = navItems.map(({ label, path }) => (
    <li key={label}>
      <Link to={path} className='p-6 text-base text-font-link'>
        {label}
      </Link>
    </li>
  ));

  return (
    <header className='bg-white py-4 border-b-5 border-yellow'>
      <div className='container flex items-center'>
        <h1>
          <Link to='/' title='拼拼'>
            <img src={logo} alt='拼拼' className='w-28 h-10' />
          </Link>
        </h1>
        <nav className='flex items-center justify-between w-full'>
          <ul className='flex'> {renderNavItems}</ul>
          <div className='flex'>
            <Button className='text-font-link bg-yellow mr-4 py-2'>登入</Button>
            <Button className='text-gray border-2 border-gray py-2'>註冊</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
