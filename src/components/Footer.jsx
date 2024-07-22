import React from "react";
import mapImg from "../Assets/map.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 flex flex-col items-center justify-center">
      <div className=" mx-auto text-center flex ">
        <div className="mb-4 flex flex-col items-center">
          <h3 className="text-gray-600 font-bold">WHERE WE ARE NOW</h3>
          <img src={mapImg} alt="Location Map" className="w-64 h-40" />
          <p className="text-gray-600 mt-2">Rio de Janeiro, Brazil</p>
        </div>
        <div className="mb-6 flex flex-col items-center">
          <h3 className="text-gray-600 font-bold">FOLLOW US</h3>
          <ul className="grid grid-cols-3 w-96 h-48 mt-4">
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-instagram text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
              </a>
              <p className="text-gray-600 mt-2">INSTAGRAM</p>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-facebook text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
              </a>
              <p className="text-gray-600 mt-2">FACEBOOK</p>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-twitter text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
              </a>
              <p className="text-gray-600 mt-2">TWITTER</p>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-pinterest text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
              </a>
              <p className="text-gray-600 mt-2">PINTEREST</p>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-youtube text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
              </a>
              <p className="text-gray-600 mt-2">YOUTUBE</p>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-youtube text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
              </a>
              <p className="text-gray-600 mt-2">YOUTUBE</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-gray-600 font-bold">SUPPORT</h3>
        <ul className="flex justify-center gap-6 mt-4">
          <li>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              JOIN US
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              PRIVACY POLICY
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              TERMS OF SERVICE
            </a>
          </li>
        </ul>
      </div>
      <div className="text-gray-600 mt-4">
        © flex simulation 2024 all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
