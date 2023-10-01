import React from 'react';
import Sidebar from './sidebar';

const Header = () => {
  return (
    <nav className="w-[200px] h-screen bg-dark-gray sm:w-0 md:w-0 lg:w-0">
      <div className="fixed top-3 right-5 flex ">
        <img src="http://via.placeholder.com/24x24" className="rounded-[100%] mr-2" alt="profileImg" />
        <span>이름명</span>
      </div>
      <Sidebar />
    </nav>
  );
};

export default Header;
