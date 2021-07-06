import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
