import React from "react";
import backgroundImage from "../Assets/ExploreSim.png"; // Update with your actual image path
import backgroundImage2 from "../Assets/ExploreSim2.png";
const ExploreSim = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="relative h-full">
        {/* Top Section */}
        <div className="text-center p-8 bg-white">
          <h1 className="text-4xl font-semibold">BACKOFFICE</h1>
          <h2 className="text-2xl font-normal mt-2">
            THE FRESH CONNECTION BACKOFFICE
          </h2>
          <p className="text-gray-700 mt-4">
            Here you can manage the simulation and execute calculations.
            <br />
            You are also able to monitor the performance of your teams.
          </p>
          <button className="mt-6 px-8 py-3 border-2 border-red-700 bg-red-500 text-white rounded-full">
            CONNECT NOW
          </button>
        </div>

        {/* Middle Section with Background Image */}
        <div
          className="relative w-screen h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <button className="px-8 py-4 w-[340px] border-2 border-red-700 bg-white hover:bg-slate-200 text-gray-600 rounded-full flex items-center justify-between space-x-1 absolute bottom-[123px] right-[161px]">
            <span>
              <i class="fa-solid fa-circle-question text-2xl"></i>
            </span>
            <span className=" text-2xl">TRAINER QUESTION</span>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-evenly bg-white p-8 pt-0">
          <button className="px-8 py-3 border-2 border-red-700 bg-red-500 text-white rounded-full flex items-center space-x-2">
            <span>
              <i class="fa-solid fa-cube"></i>
            </span>
            <span>EXPLORE SIMULATION</span>
          </button>
          <div className="flex items-center space-x-4">
            <img
              src={backgroundImage2}
              alt="Icon"
              className="h-56 w-full bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSim;
