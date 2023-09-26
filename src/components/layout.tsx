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
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
