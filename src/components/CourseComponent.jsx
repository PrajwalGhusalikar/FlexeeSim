import React from "react";
import videoimg from "../Assets/introvideo.png";
import deploytosim from "../Assets/deploytosimimg.png";
const CourseComponent = () => {
  const SelectedCourse = JSON.parse(localStorage.getItem("SelectedCourse"));
  return (
    <div className="bg-white p-8 px-16 w-full mx-auto">
      <header className=" flex justify-between pb-3 border-0 border-b-2 border-gray-300 mb-9">
        <div className="">
          <div className="flex justify-start space-x-4 items-center mb-4">
            <p className=" h-6 w-6 flex justify-center items-center rounded-full border border-red-500 border-spacing-2">
              <i class="fa-solid fa-circle-check"></i>
            </p>

            <div className=" font-normal text-3xl">COURSE</div>
            <div className="mx-2">|</div>
            <div className="text-gray-900 text-xl">
              SESSION NUMBER: <span className="text-red-600">8713</span>
            </div>
          </div>
          <div className="text-gray-600 text-start mb-6">
            <p className="font-semibold text-xl mb-2">
              {SelectedCourse?.course}
            </p>
            <p className=" text-xl mb-2 font-semibold ">
              <span className=" opacity-50"> ORGANIZATION:</span>{" "}
              <span className="text-gray-900 font-semibold">
                {SelectedCourse?.organization}
              </span>
            </p>
          </div>
        </div>
        <div className="text-start">
          <h2 className="text-6xl font-medium">
            yZFU-RY9q{" "}
            <span className=" font-thin">
              {" "}
              <i class="fa-solid fa-share-nodes"></i>
            </span>
          </h2>
          <h3 className="text-xl my-3 pl-20 cursor-pointer text-red-500">
            copy to clipboard
          </h3>
        </div>
      </header>

      <div className="grid grid-cols-5 place-content-end  gap-0  justify-between items-end ">
        <div className="space-y-2 col-span-3 text-start   pb-8">
          <div className="">
            <p className=" font-semibold text-3xl">PAYMENT / PRICINFG</p>
            <p className="text-5xl font-bold pt-2">USD 75.08</p>
          </div>
          <div className="pt-6">
            <p className=" text-3xl">DUE DATE</p>
            <p className="text-5xl font-bold pt-2">OCT 20, 2024</p>
          </div>
          <p className="text-gray-500 opacity-60 text-3xl">59 DAYS REMAINING</p>
        </div>
        <div className="  col-span-2  text-white  text-center cursor-pointer flex justify-center items-center p-3 border-0 border-l-2 border-b-0 border-gray-400 border-opacity-50  ">
          <img src={deploytosim} alt="" className="w-[600px]" />
        </div>
      </div>

      <div className="grid grid-cols-5  justify-between items-start">
        <div className="flex flex-col col-span-3 items-start mb-6 border-2 border-e-0 border-gray-400  rounded-s-md p-8 h-full border-opacity-50 ">
          <p className="font-semibold text-4xl mb-2  mr-4">
            TRAINER / TEACHER(S)
          </p>
          <div className="bg-red-500 h-0.5 w-24 my-2"></div>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center">
              <input type="radio" name="teacher" className="mr-2" />
              <label className="text-xl font-semibold text-gray-400 p-1">CHUCK NEMER N-TEACHER</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="teacher" className="mr-2" />
              <label className="text-xl font-semibold text-gray-400 p-1">IGOR LOPES MARTINEZ</label>
            </div>
            <div className="flex items-center text-red-400 font-semibold">
              <input
                type="radio"
                name="teacher"
                className="mr-2"
                checked
                readOnly
              />
              <label  className="text-xl font-semibold text-red-400 p-1">VIKRAM SETHI (YOU)</label>
            </div>
          </div>
        </div>

        <div className=" col-span-2 border-2  rounded-e-md   border-gray-400 border-opacity-50 p-2 pb-8 h-full">
          <img src={videoimg} alt="" className="h-full w-full " />
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
