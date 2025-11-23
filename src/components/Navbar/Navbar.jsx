import React from "react";
import { GiEternalLove } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navbarStyle = {
    backgroundColor: location.pathname === "/" ? "#9538E2" : "white",
    color: location.pathname === "/" ? "white" : "black",
    padding: "10px",
    transition: "background-color 0.3s ease",
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="Statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="Dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="About">About</NavLink>
      </li>
    </>
  );
  return (
    <div
      className="flex px-5 justify-between  max-w-7xl mx-auto "
      style={navbarStyle}
    >
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            Gadget Heaven
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="flex justify-end items-center ">
        <button className="px-5 py-5 text-xl bg-white rounded-full items-center justify-center text-center mr-3 ">
          <IoCartOutline className="text-[#3A3A3A]" />
        </button>
        <button className="px-5 py-5 text-xl bg-white rounded-full items-center justify-center text-center ">
          <GiEternalLove className="text-[#3A3A3A]" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
