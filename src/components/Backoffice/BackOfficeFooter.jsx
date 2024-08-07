import React from "react";

const BackOfficeFooter = () => {
  return (
    <div className="flex fixed bottom-0 h-10 items-center w-screen bg-white z-50">
      <div className="text-2xl w-60 border border-b-red-500 border-b-2  bg-gray-100 text-red-500  text-center">
        <i className="fa-solid fa-arrow-up-right-from-square"></i> LogOut
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
