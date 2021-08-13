import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body">
        <Sidebar />
        <div className="cont">{children}</div>
      </div>
    </>
  );
};

export default LayoutAdmin;
