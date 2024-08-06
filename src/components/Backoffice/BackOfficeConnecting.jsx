import React from "react";

function BackOfficeConnecting() {
  return (
    <div className="bg-white h-screen p-10">
      <div className="flex  flex-col space-y-4 justify-center items-center">
        <div className="ml-4">
          <p className="text-gray-700 text-lg font-medium">
            Please Wait While We Are Processing Your Request.
          </p>
          <p className="text-gray-500 text-sm font-medium">
            don't refresh or leave this page.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-gray-300 rounded-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="bg-gray-200 p-5 rounded-l min-w-[600px]">
          <h3 className="text-xl font-medium text-gray-800 mb-3">
            SYSTEM STATUS
          </h3>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-600 font-medium">
              CONNECTION STATUS: IDLE
            </p>
            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-600 font-medium">
              CONNECTION STATUS: CONNECTING
            </p>
            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-600 font-medium">
              CONNECTION STATUS: CONNECTED
            </p>
            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-gray-200 p-5 rounded-lg">
          <h3 className="text-xl font-medium text-gray-800 mb-3">
            BACK OFFICE MANAGEMENT
          </h3>
          <div className="flex justify-center items-center mb-2">
            <div className="w-2 h-2 rounded-full bg-gray-500 mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 mr-1"></div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <div className="bg-blue-500 w-48 h-36  flex flex-col justify-center items-center mr-2">
              <p className="text-sm font-medium text-white">Suppliers</p>
              <p className="text-xs font-medium text-white">(Raw Material)</p>
            </div>
            <div className="bg-blue-500 w-48 h-36  flex flex-col justify-center items-center mr-2">
              <p className="text-sm font-medium text-white">Procurement</p>
            </div>
            <div className="bg-yellow-500 w-48 h-36  flex flex-col justify-center items-center mr-2">
              <p className="text-sm font-medium text-white">Production</p>
            </div>
            <div className="bg-orange-500 w-48 h-36  flex flex-col justify-center items-center mr-2">
              <p className="text-sm font-medium text-white">Delivery</p>
            </div>
            <div className="bg-red-500 w-48 h-36  flex flex-col justify-center items-center">
              <p className="text-sm font-medium text-white">Customers</p>
              <p className="text-xs font-medium text-white">
                (Finished Product)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackOfficeConnecting;
