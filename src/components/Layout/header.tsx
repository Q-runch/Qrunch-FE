import React from 'react';
import Sidebar from './sidebar';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="w-[200px] h-screen bg-dark-gray sm:w-0 md:w-0 lg:w-0">
      {/* <Link href="/login">
        <div className="fixed top-3 right-5 flex items-center text-primary-blue-solid">
          <img src="http://via.placeholder.com/32x32" className="rounded-full mr-2" alt="profileImg" />
          <span className="text-lg font-bold">이름명</span>
        </div>
      </Link> */}
      <Sidebar />
    </nav>
  );
};

export default Header;
