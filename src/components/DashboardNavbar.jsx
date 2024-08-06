import React from "react";
import grid_img from "../Assets/Navbar-grid-img.png";
import { useLocation, useNavigate } from "react-router-dom";
const DashboardNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" w-full fixed top-0 z-40 ">
      <div className="flex w-full items-center justify-start bg-white p-4 border-b-2 border-gray-200">
        <div className="flex items-center ">
          <div className="text-red-600 text-4xl font-bold border border-b-red-500 border-r-red-500 border-l-0 border-t-0">
            {/* <i className="fa-solid fa-th-large"></i> Logo */}
            <img src={grid_img} alt="" className="h-36 w-36" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-end items-center">
            <div className="relative">
              <i className="fa-solid fa-bell text-gray-500 text-xl"></i>
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
            </div>
            <div className="">
              {" "}
              <span className="ml-2">Welcome Vikram</span>
            </div>
            <div className="ml-4 flex items-center text-gray-500">
              <i className="fa-solid fa-user-circle text-red-600"></i>
              <span className="ml-2">My Profile</span>
            </div>
            <div className="ml-4">
              <i className="fa-solid fa-bars text-red-500 text-xl"></i>
            </div>
            <div className="ml-4 border border-b-red-300 h-24 w-24 bg-slate-200 flex items-center justify-center">
              <i className="fa-solid fa-sign-out-alt text-red-600 text-4xl"></i>
            </div>
          </div>{" "}
          <div className="ml-4 bg-slate-200 p-3 flex justify-between items-center text-gray-500">
            <div className=" flex items-center">
              <i className="fa-solid fa-home text-red-600"></i>
              <span
                onClick={() => navigate("/dashboard")}
                className="ml-2 cursor-pointer"
              >
                Dashboard
              </span>
              <i className="fa-solid fa-angle-right ml-2 text-red-600"></i>
              {/* links */}
              <div className="links">
                {location.pathname === "/dashboard" && (
                  <span className="ml-2"></span>
                )}
                {location.pathname === "/dashboard/courses" && (
                  <span className="ml-2">Course</span>
                )}
              </div>
            </div>
            <div className="">
              <i className="fa-solid fa-filter ml-2 text-xl text-red-600"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
