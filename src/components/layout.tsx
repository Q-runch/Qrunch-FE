import React, { ReactNode } from 'react';
import Footer from './Layout/footer';
import Header from './Layout/header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-20 lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
