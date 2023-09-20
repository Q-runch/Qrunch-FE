import React from 'react';
import Sidebar from './sidebar';

const Header = () => {
  return (
    <div>
      <nav className="fixed w-full top-0 left-0 z-50 border-gray-200 bg-gray-50  xl:px-20 md:px-10 ">
        <Sidebar />
      </nav>
      <div className="flex justify-end">
        <button className="w-20 h-10 border-2 border-white">hi</button>
      </div>
    </div>
  );
};

export default Header;
