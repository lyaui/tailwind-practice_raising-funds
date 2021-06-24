import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';

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
          <Link path='/' title='拼拼'>
            <img src={logo} alt='拼拼' className='w-28 h-10' />
          </Link>
        </h1>
        <nav>
          <ul className='flex'> {renderNavItems}</ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
