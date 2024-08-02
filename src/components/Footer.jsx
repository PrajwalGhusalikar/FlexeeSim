// import React from "react";
// import mapImg from "../Assets/map.png";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 py-12 flex flex-col items-center justify-center">
//       <div className=" mx-auto text-center flex ">
//         <div className="mb-4 flex flex-col items-center">
//           <h3 className="text-gray-600 font-bold">WHERE WE ARE NOW</h3>
//           <img src={mapImg} alt="Location Map" className="w-64 h-40" />
//           <p className="text-gray-600 mt-2">Rio de Janeiro, Brazil</p>
//         </div>
//         <div className="mb-6 flex flex-col items-center">
//           <h3 className="text-gray-600 font-bold">FOLLOW US</h3>
//           <ul className="grid grid-cols-3 w-96 h-48 mt-4">
//             <li>
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 <i class="fa-brands fa-instagram text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
//               </a>
//               <p className="text-gray-600 mt-2">INSTAGRAM</p>
//             </li>
//             <li>
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 <i class="fa-brands fa-facebook text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
//               </a>
//               <p className="text-gray-600 mt-2">FACEBOOK</p>
//             </li>
//             <li>
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 <i class="fa-brands fa-twitter text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
//               </a>
//               <p className="text-gray-600 mt-2">TWITTER</p>
//             </li>
//             <li>
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 <i class="fa-brands fa-pinterest text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
//               </a>
//               <p className="text-gray-600 mt-2">PINTEREST</p>
//             </li>
//             <li>
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 <i class="fa-brands fa-youtube text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
//               </a>
//               <p className="text-gray-600 mt-2">YOUTUBE</p>
//             </li>
//             <li>
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 <i class="fa-brands fa-youtube text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"></i>
//               </a>
//               <p className="text-gray-600 mt-2">YOUTUBE</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="mb-6">
//         <h3 className="text-gray-600 font-bold">SUPPORT</h3>
//         <ul className="flex justify-center gap-6 mt-4">
//           <li>
//             <a
//               href="/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
//             >
//               JOIN US
//             </a>
//           </li>
//           <li>
//             <a
//               href="/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
//             >
//               PRIVACY POLICY
//             </a>
//           </li>
//           <li>
//             <a
//               href="/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
//             >
//               TERMS OF SERVICE
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="text-gray-600 mt-4">
//         © flexee simulation 2024 all rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import img1 from "../Assets/wifiService.png";
import map from "../Assets/map.png";

const Footer = () => {
  return (
    <>
      {/* getting started */}
      <div className="bg-teal-500 rounded-lg p-10 my-5 text-center mx-28">
        <h2 className="text-5xl font-bold text-white mb-4">Getting started</h2>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 my-2 rounded-full">
          Start Simulation
        </button>
      </div>
      {/* member ship starts here  */}
      <div className="m-10 flex justify-evenly">
        <div className=" flex flex-col items-start justify-center">
          <h2 className="text-4xl font-bold mb-4">Memberships</h2>
          <p className="text-gray-500 mb-4">PARTNERS</p>
          <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
            Contact us
          </button>
        </div>
        <div className="">
          <div className="mt-8 grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img className="h-14 " src={img1} alt="" />
              <p className="text-gray-700 font-medium mt-2">PULVINAR</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-14 " src={img1} alt="" />
              <p className="text-gray-700 font-medium mt-2">CONSECTETUR</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-14 " src={img1} alt="" />
              <p className="text-gray-700 font-medium mt-2">BIBENDUM</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img className="h-14 " src={img1} alt="" />
              <p className="text-gray-700 font-medium mt-2">SOLITUDIN</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-14 " src={img1} alt="" />
              <p className="text-gray-700 font-medium mt-2">ADIPISCING</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-gray-900 px-3 text-gray-400 py-8">
        <div className="flex justify-between mx-auto px-4">
          <div className="flex w-full justify-between">
            <div className="h-28 w-44">
              <div className="">
              <img src={map} alt="" className="h-full w-full" />
              </div>
              <h1>Where are we now?</h1>
            </div>

            <div className="flex justify-evenly w-full">
              <div className="w-full px-4 mb-6 text-start pl-20">
                <h3 className="text-white font-bold mb-4">Product</h3>
                <ul>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      All Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Companies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Candidates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full  px-4 mb-6 text-start">
                <h3 className="text-white font-bold mb-4">Resources</h3>
                <ul>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      User guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Webinars
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full  px-4 mb-6 text-start">
                <h3 className="text-white font-bold mb-4">Company</h3>
                <ul>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Join us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-3xl text-start">
              Are You ready to experiance Simulation?
            </h1>
            <button className="p-2 my-3 px-4 h-10  bg-teal-300  text-white">
              Try Now
            </button>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-xs">
            &copy; Flex Simulation 2024 all rights reserved.
          </p>
          <div className="flex justify-center mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
