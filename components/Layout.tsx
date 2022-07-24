import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto w-11/12 max-w-screen-3xl">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <a href="#top" className="fixed bottom-10 right-10 z-20 flex h-16 w-16 items-center justify-center rounded-full border border-gray-800 text-primary">
        Top
      </a>
    </div>
  );
};

export default Layout;
