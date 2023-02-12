import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="md:ml-60">
      {children}
      <Footer />
      </div>
    </>
  );
};

export default Layout;
