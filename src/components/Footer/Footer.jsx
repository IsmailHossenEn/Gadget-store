import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#7011eb] to-[#4b0082] pt-20">
      <div className="pb-9 border-b border-b-[#09080F]/10 w-3/5 mx-auto">
        <NavLink to="/" className="flex justify-center mb-4 h-20">
          <img
            src="https://res.cloudinary.com/dn9bladxx/image/upload/v1763296044/Print__1_-removebg-preview_ylmqjf.png"
            alt=""
          />
        </NavLink>

        <p className="text-gray-200 text-md text-center">
          Leading the way in cutting age technology and innovation.
        </p>
      </div>
      <footer className=" flex gap-8 lg:gap-5 md:gap-4 flex-col lg:flex-row md:flex-row items-start justify-between max-w-7xl mx-auto  text-base-content p-10">
        <nav className="flex flex-col gap-3 mb-5 lg:mb-0 md:mb-0">
          <h6 className="footer-title mb-0 lg:mb-2 md:mb-2">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col gap-3  mb-5 lg:mb-0 md:mb-0">
          <h6 className="footer-title  mb-0 lg:mb-2 md:mb-2">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col gap-3  mb-5 lg:mb-0 md:mb-0">
          <h6 className="footer-title  mb-0 lg:mb-2 md:mb-2">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
