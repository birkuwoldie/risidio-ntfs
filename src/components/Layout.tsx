// src/components/Layout.tsx

import { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {/* <footer className="bg-gray-800 text-white text-center p-4">
        © 2024 My Marketplace
      </footer> */}
      <Footer/>
    </div>
  );
};

export default Layout;
