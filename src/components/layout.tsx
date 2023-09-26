import React, { ReactNode } from 'react';
import Header from './Layout/header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full h-full bg-dark-gray">{children}</main>
    </>
  );
};

export default Layout;
