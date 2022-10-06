import React from "react";
import Sidebar from "./Sidebar";
//import Aside from "./Aside";
const Layout = ({ children, open, setOpen }) => {
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <main className=" lg:ml-52   2xl:text-3xl">{children}</main>
    </div>
  );
};

export default Layout;
