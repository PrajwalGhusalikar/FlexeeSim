import React from "react";
import logo from "../Assets/Vector.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0  left-0 w-screen z-50 shadow-md bg-white">
      <div className="flex justify-between px-10 pt-7 items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-red-500 pr-1">FLEXEE</h1>
          <h1 className="text-xl font-bold">SIMULATION</h1>
          <div className="ml-4">
            <img src={logo} alt="" className="h-12" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer"
          >
            Dashboard
          </Link>
          <Link
            to="/backoffice"
            className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer"
          >
            Backoffice
          </Link>
          <Link
            to="/aboutus"
            className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/features"
            className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="/preview"
            className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer"
          >
            Decisions Preview
          </Link>
          {/* <p className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer">
        Support
      </p> */}

          {/* <button className=" text-red-600 font-bold py-2 px-4 rounded">
        <i class="fa-solid fa-bars"></i>
      </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
