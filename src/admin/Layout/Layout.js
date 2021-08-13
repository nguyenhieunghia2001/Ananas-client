import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutAdmin = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  return (
    <>
      <Header openSidebar={toggleSidebar} setOpenSidebar={setToggleSidebar} />
      <Sidebar openSidebar={toggleSidebar} />
      <div className="body">
        <div className="cont">{children}</div>
      </div>
    </>
  );
};

export default LayoutAdmin;
