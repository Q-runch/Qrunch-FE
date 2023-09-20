import React from 'react';
import Link from 'next/link';

function Sidebar() {
  const hrefLink = [
    { id: 1, text: '로그인', href: '/' },
    { id: 2, text: '회원가입', href: '/' },
  ];

  return (
    <div
      id="sidebar"
      className={`z-5 px-12 border-r-2 border-white bg-gray-800 h-full left-0 top-0 fixed transition-transform duration-500 ease-in-out translate-x-0`}
    >
      <ul className="text-center font-bold text-white mt-20 sm:text-[8px]">
        {hrefLink.map((link) => (
          <li key={link.id} className="my-8">
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
