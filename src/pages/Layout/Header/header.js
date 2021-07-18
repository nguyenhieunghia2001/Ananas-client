import React from "react";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from './components/HeadeBottom'
import Navbar from './components/Navbar'

const Header = ({ children }) => {
  // console.log('check loop component header');
  return (
    <>
      <HeaderTop />
      <Navbar />
      <HeaderBottom />
      {children}
    </>
  );
};

export default Header;
