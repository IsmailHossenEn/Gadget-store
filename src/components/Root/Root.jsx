import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
