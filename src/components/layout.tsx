import React, { ReactNode } from 'react';
import Header from './Layout/header';
import Sidebar from './Layout/sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black">
      <Sidebar />
      <Header />
      <div className="flex flex-col flex-grow">
        <main className="my-20 lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
