import React from "react";

const BackOfficeNavbar = () => {
  return (
    <div className="">
      <div className="w-full fixed z-40  top-0 left-0  ">
        <div className="flex justify-between items-center  bg-gray-900 text-white p-0">
          <div className="w-60 left-0">
            <h1 className="text-2xl p-2 bg-[#383838] font-bold">FLEXEE</h1>
          </div>
          <div className="flex items-center ">
            <svg
              class="h-8 w-8 text-white "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="4" y="4" width="6" height="6" rx="1" />{" "}
              <rect x="14" y="4" width="6" height="6" rx="1" />{" "}
              <rect x="4" y="14" width="6" height="6" rx="1" />{" "}
              <rect x="14" y="14" width="6" height="6" rx="1" />
            </svg>
            <i className="fa-solid fa-bell mr-2 px-3 text-2xl"></i>
            <p className="px-3 text-2xl">|</p>
            <a href="#" className="hover:text-gray-500">
              Back To My Account
            </a>
            <i className="fa-solid fa-circle-user mr-2 px-3 text-3xl"></i>
          </div>
        </div>
        <div className="">
          <div className="flex h-10">
            {/* There is not proper alignments  */}
            <div className=" w-60 h-10 "></div>
            <div className=" w-full text-start  ">
              <div className="text-xl flex text-start font-bold w-full py-1 bg-white  ">
                <h1 className="w-72 text-right font-medium bg-slate-200 pr-10 mr-1 pl-0 p-1">
                  SELECT A POOL{" "}
                </h1>
                <div className="relative w-full">
                  <select
                    name=""
                    id=""
                    className="px-3 w-full p-1 border-0 border-b-2 border-l-2 font-normal appearance-none pl-10"
                  >
                    <option value="">
                      {" "}
                      15745 - Wright State University - Vikram Sethi - MBA 7800
                      - B90 (6375) - Open
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <div className="bg-gray-200  border-4 p-1 border-l-red-500 w-14 flex justify-center items-center h-8 absolute right-0 top-0">
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackOfficeNavbar;
