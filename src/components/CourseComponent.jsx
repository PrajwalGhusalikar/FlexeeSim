import React from "react";
import videoimg from "../Assets/introvideo.png";
const CourseComponent = () => {
  const SelectedCourse = JSON.parse(localStorage.getItem("SelectedCourse"));
  return (
    <div className="bg-white p-8 px-16 w-full mx-auto">
      <header className=" flex justify-between">
        <div className="">
          <div className="flex justify-start space-x-4 items-center mb-4">
            <p className=" h-6 w-6 flex justify-center items-center rounded-full border border-red-500 border-spacing-2">
              <i class="fa-solid fa-circle-check"></i>
            </p>

            <div className=" font-normal text-3xl">COURSE |</div>
            <div className="text-gray-500">
              SESSION NUMBER: <span className="text-red-600">8713</span>
            </div>
          </div>
          <div className="text-gray-600 text-start mb-6">
            <p className="font-semibold">{SelectedCourse?.course}</p>
            <p className="text-sm">ORGANIZATION: {SelectedCourse?.organization}</p>
          </div>
        </div>
        <div className="text-start">
          <h2 className="text-6xl">
            yZFU-RY9q <i class="fa-solid fa-share cursor-pointer"></i>
          </h2>
          <h3 className="text-xl my-3 cursor-pointer text-red-500">
            copy to clipboard
          </h3>
        </div>
      </header>

      <hr />

      <div className="flex justify-between items-center mb-6">
        <div className="space-y-2 text-start">
          <p className="text-lg font-semibold">PAYMENT / PRICING</p>
          <p className="text-2xl font-bold">USD 75.08</p>
          <p className="text-lg">DUE DATE</p>
          <p className="text-2xl font-bold">OCT 20, 2024</p>
          <p className="text-gray-500">59 DAYS REMAINING</p>
        </div>
        <div className="bg-red-500 w-64 h-44 text-white p-4 rounded-lg text-center cursor-pointer">
          <div className="text-3xl">
            <i class="fa-regular fa-square-plus"></i>
          </div>
          <p className="font-bold text-2xl">DEPLOY TO</p>
          <p className="text-4xl">SIMULATION</p>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start mb-6">
          <p className="font-semibold text-2xl mb-3 mr-4">
            TRAINER / TEACHER(S)
          </p>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center">
              <input type="radio" name="teacher" className="mr-2" />
              <label>CHUCK NEMER N-TEACHER</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="teacher" className="mr-2" />
              <label>IGOR LOPES MARTINEZ</label>
            </div>
            <div className="flex items-center text-red-400 font-semibold">
              <input
                type="radio"
                name="teacher"
                className="mr-2"
                checked
                readOnly
              />
              <label>VIKRAM SETHI (YOU)</label>
            </div>
          </div>
        </div>

        <div className="">
          <img src={videoimg} alt="" className="h-48 " />
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
