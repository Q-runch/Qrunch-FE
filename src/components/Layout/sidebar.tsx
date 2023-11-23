import { toggleButton } from '@/reducer/buttonToggle';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

function Sidebar() {
  const dispatch = useDispatch();

  const handleButtonClick = (id: number) => {
    dispatch(toggleButton(id));
  };
  const hrefLink = [
    { id: 1, text: 'PDF' },
    { id: 2, text: 'TEXT' },
  ];

  return (
    <div
      id="sidebar"
      className={`z-5 px-12  bg-[#21201E] w-[200px] h-full left-0 top-0 md:w-full md:h-16 sm:h-16 sm:w-full fixed `}
    >
      <div className="hidden xl:contents mt-4">
        <Link href="/">
          <img src="/logo.svg" />
        </Link>
      </div>
      <ul className="text-center font-bold text-[#FCE850] text-2xl md:flex md:flex-row md:justify-between md:-mt-4 sm:text-[16px] sm:-mt-4 sm:flex sm:flex-row sm:justify-between">
        {hrefLink.map((link) => (
          <button key={link.id} className="flex flex-col my-8 sm:ml-2" onClick={() => handleButtonClick(link.id)}>
            {link.text}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
