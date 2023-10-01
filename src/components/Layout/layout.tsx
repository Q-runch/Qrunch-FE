import React, { ReactNode } from 'react';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-calc-100-200 h-screen bg-black">{children}</main>
    </>
  );
};

export default Layout;
