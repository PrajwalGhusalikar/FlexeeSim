import React from "react";
import logout_img from "../../Assets/logout.png";
const BackOfficeFooter = () => {
  return (
    <div className="flex fixed bottom-0  items-center w-screen bg-white z-50">
      <div className="text-xl h-10 flex items-center justify-center w-60 border border-b-red-500 border-b-4  bg-gray-100 text-red-500  text-center">
        <div className="ml-4  cursor-pointer border-b-red-300  mx-3  flex items-center justify-center">
          {/* <i className="fa-solid fa-sign-out-alt text-red-600 text-4xl"></i> */}
          <img src={logout_img} className="h-8 w-8" alt="" />
        </div>{" "}
        LogOut
      </div>
      <div className="text-xs px-3 text-gray-400 text-center">
        Copyright 2024{" "}
        <span className="text-red-500 font-semibold">FLEX SOLUTION</span> , All
        Rights Reserved
      </div>
    </div>
  );
};

export default BackOfficeFooter;
