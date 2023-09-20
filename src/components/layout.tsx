import React, { ReactNode } from 'react';
import Header from './Layout/header';
import Sidebar from './Layout/sidebar';
import Footer from './Layout/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <Sidebar /> */}
      <Header />
      <div className="flex flex-col flex-grow">
        <main className="my-20 lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">{children}</main>
      </div>
      <div className="xl:hidden lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
