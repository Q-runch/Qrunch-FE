import React from 'react';

const Header = () => {
  return (
    <nav className="w-[200px] h-screen bg-dark-gray">
      <div className="fixed top-3 right-5 flex">
        <img src="http://via.placeholder.com/24x24" className="rounded-[100%] mr-2" alt="profileImg" />
        <span>이름명</span>
      </div>
    </nav>
  );
};

export default Header;
