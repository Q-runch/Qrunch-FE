import React, { ReactNode } from 'react';
import Header from './Layout/header';
import Footer from './Layout/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <main className="my-20 lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">{children}</main>
      </div>
      <div className="xl:hidden lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
