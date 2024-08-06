import React, { useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const courses = [
    {
      organization: "Wright State University",
      course: "TFC V8 - MBA 7800 SECTION A90 - BOOK ONLY - SUMMER 2024",
      members: 8,
    },
    {
      organization: "Wright State University",
      course: "TFC V8 - MBA 7800 SECTION A90 - SIM ONLY - SUMMER 2024",
      members: 36,
    },
    {
      organization: "Wright State University",
      course: "TFC V8 - MBA 7800 SECTION A90 - SIM ONLY - SUMMER 2024",
      members: 36,
    },
    {
      organization: "Wright State University",
      course: "TFC V8 - MBA 7800 SECTION A90 - SIM ONLY - SUMMER 2024",
      members: 36,
    },
  ];

  const handleSelectedCourse = (course) => {
    localStorage.setItem("SelectedCourse", JSON.stringify(course));
    navigate("/dashboard/courses");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted code:", code);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 px-10 relative">
      {/* <header className="flex justify-between w-full items-center mb-8">
        <DashboardNavbar/>
      </header> */}

      <div className="absolute left-1/2 transform top-16 h-[580px] w-[3px] bg-red-500"></div>
      <div className="absolute left-1/3 transform -translate-x-1/3 top-16 w-1/4 h-[2px] bg-red-500"></div>

      <section className="grid grid-cols-2  items-center relative gap-10">
        <div className="text-start">
          <h2 className="text-2xl font-bold mb-4">THE FRESH CONNECTION</h2>
          <h3 className="text-lg mb-4">4 ACTIVE COURSES</h3>
        </div>
        <div className="bg-white p-2 mx-2 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-start">CODE ENTRY</h2>
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 border border-gray-300 rounded p-2"
              placeholder="Enter code"
            />
            <button type="submit" className="bg-red-500 text-white p-2 rounded">
              SUBMIT
            </button>
          </form>
        </div>
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-16 h-0.5 w-8 bg-red-500"></div> */}
      </section>

      <section className="w-full my-10">
        <div className="grid grid-cols-2 gap-14">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => handleSelectedCourse(course)}
              className={`bg-gray-100 cursor-pointer text-start p-4 px-8 rounded shadow-md`}
            >
              <div className="">
                <div className="text-lg font-semibold">ORGANIZATION:</div>
                <div className="text-gray-700 mb-2">{course.organization}</div>
                <div className="text-lg font-semibold">COURSE:</div>
                <div className="text-gray-700 mb-2">{course.course}</div>
                <div className="text-lg font-semibold">MEMBERS:</div>
                <div className="text-gray-700">
                  TOTAL NUMBER OF STUDENTS - {course.members}
                </div>
              </div>
              <div className="text-red-500 text-right">
                Explore Team/Members
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
