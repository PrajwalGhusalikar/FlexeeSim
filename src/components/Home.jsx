import React from "react";
import logo from "../Assets/Vector.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Home() {
  return (
    <div className="bg-white p-8">
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
