import React from "react";
import backgroundImage from "../Assets/ExploreSim.png"; // Update with your actual image path
import backgroundImage2 from "../Assets/ExploreSim2.png";
const ExploreSim = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="relative h-full">
        {/* Top Section */}
        <div className="text-center p-8 bg-white">
          <h1 className="text-4xl font-bold">BACKOFFICE</h1>
          <h2 className="text-xl font-semibold mt-2">
            THE FRESH CONNECTION BACKOFFICE
          </h2>
          <p className="text-gray-700 mt-4">
            Here you can manage the simulation and execute calculations.
            <br />
            You are also able to monitor the performance of your teams.
          </p>
          <button className="mt-6 px-8 py-3 bg-red-500 text-white rounded-full">
            CONNECT NOW
          </button>
        </div>

        {/* Middle Section with Background Image */}
        <div
          className="relative h-[500px] mx-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* <div className="absolute bottom-0 right-0 w-1/2 p-8 bg-red-500 text-white">
            <h3 className="text-2xl font-bold">THE FRESH CONNECTION</h3>
            <h4 className="text-xl mt-2">ONLINE TRAIN THE TRAINER</h4>
            <p className="mt-4">
              welcome to the online train the trainer for the fresh connection.
            </p>
            <button className="mt-6 px-8 py-3 bg-white text-red-500 rounded-full">
              TRAINER QUESTION
            </button>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-evenly bg-white p-8">
          <button className="px-8 py-3 bg-red-500 text-white rounded-full flex items-center space-x-2">
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
