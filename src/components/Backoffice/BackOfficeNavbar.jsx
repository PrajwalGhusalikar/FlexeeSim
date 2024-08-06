import React from "react";

const BackOfficeNavbar = () => {
  return (
    <div className="w-full fixed z-40 bg-emerald-400 top-0 left-0 right-0">
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          {" "}
          <h1 className="text-xl font-bold">FLEXEE</h1>
          <div>
          <i className="fa-solid fa-bars"></i>
        </div>
        </div>
        
        <div className="flex items-center">
          <i className="fa-solid fa-grid-layout mr-2"></i>
          <i className="fa-solid fa-circle-user mr-2"></i>
          <a href="#" className="hover:text-gray-500">
            Back To My Account
          </a>
          <i className="fa-solid fa-caret-down ml-2"></i>
        </div>
      </div>
    </div>
  );
};

export default BackOfficeNavbar;
