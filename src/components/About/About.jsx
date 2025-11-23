import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen bg-gradient-to-r from-[#994bdb]  via-[#2a75cb] to-[#64adf7] h-64 w-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Comming Soon!</h1>

          <NavLink to="/">
            <button class=" mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-110 duration-300">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
