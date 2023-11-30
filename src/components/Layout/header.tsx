import React from 'react';
import Sidebar from './sidebar';

const Header = () => {
  return (
    <nav className="w-[200px] h-screen bg-dark-gray sm:w-0 md:w-0 lg:w-0">
      <Sidebar />
    </nav>
  );
};

export default Header;
