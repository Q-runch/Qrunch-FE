import React, { ReactNode } from 'react';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-calc-100-200 sm:w-screen md:w-screen lg:w-screen h-screen bg-black">{children}</main>
    </>
  );
};

export default Layout;
