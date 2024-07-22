import React from "react";
import logo from "../Assets/Vector.png"
function Home() {
  return (
    <div className="bg-white p-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-red-500 pr-1">FLEXEE</h1>
          <h1 className="text-xl font-bold">SIMULATION</h1>
          <div className="ml-4">
           <img src={logo} alt="" className="h-12" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer">
            Features
          </p>
          <p className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer">
            Resources
          </p>
          <p className="text-gray-500 hover:text-red-500 hover:underline underline-offset-4 decoration-red-600 cursor-pointer">
            Support
          </p>
          <button className=" text-red-600 font-bold py-2 px-4 rounded">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-700">
          FLEXEE SIMULATION is designed to provide
        </h2>
        <h2 className="text-2xl font-bold text-red-500">
          COMPREHENSIVE LEARNING EXPERIENCE
        </h2>
        <p className="text-gray-500 mt-4">
          in supply chain management and production strategy.
        </p>
      </div>
      <div className="mt-16 flex justify-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
