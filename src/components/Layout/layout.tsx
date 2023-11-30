import React from 'react';
import Header from '@/components/Layout/header';
import { LayoutDTO } from '@/types/layout';

const Layout: React.FC<LayoutDTO> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-calc-100-200 sm:w-screen md:w-screen lg:w-screen h-screen bg-black">{children}</main>
    </>
  );
};

export default Layout;
