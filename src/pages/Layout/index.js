import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import FooterMobile from "./Footer/footerMobile";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FooterMobile />
    </>
  );
};

export default Layout;
