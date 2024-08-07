import React from "react";

const BackOfficeRankings = () => {
  return (
    <div className=" bg-gray-100 m-0 px-10 ">
      <div className=" w-full">
        <h3 className="text-2xl px-2 text-start font-semibold mb-4">
          Round and weighted rankings
        </h3>
      </div>
      <div className="flex justify-between">
        <div className=" flex space-x-4 items-center ">
          <div className="h-10 w-14 flex items-center justify-center bg-slate-950 rounded-md text-white">
            <div className="">1</div>
            <span className="px-2">|</span>
            <div className="">0</div>
          </div>
          <div className="flex items-center h-10 w-48 bg-red-500 rounded-full text-white">
            <div className="w-10">
              <i class="fa-solid fa-circle-plus"></i>
            </div>
            <span className="px-2">|</span>
            <div className="w-full">Round Score</div>
          </div>
          <div className="flex items-center h-10 w-48 bg-white border-red-500 border-2 rounded-full text-red-500">
            <div className="w-10">
              <i class="fa-solid fa-clock"></i>
            </div>
            <span className="px-2">|</span>
            <div className="w-full">Round Score</div>
          </div>
        </div>
        <div className="text-lg text-red-500">
          <span className="px-2">
            {" "}
            <i class="fa-solid fa-file-arrow-down"></i>
          </span>
          Download
        </div>
      </div>
    </div>
  );
};

export default BackOfficeRankings;
