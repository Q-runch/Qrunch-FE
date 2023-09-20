import React from 'react';
import Sidebar from './sidebar';

const Header = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-gray-200 bg-gray-50  xl:px-20 md:px-10 ">
      <Sidebar />
    </nav>
  );
};

export default Header;
