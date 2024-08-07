import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faArrowLeft,
  faDownload,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import BackOfficeNavbar from "./BackOfficeNavbar";
import BackOfficeSidebar from "./BackOfficeSidebar";

const BackOfficeUser = () => {
  const [users, setUsers] = useState([
    {
      name: "Amber Rox",
      id: "#54639841",
      email: "email@xyz.com",
      opinion: "Operations, Sales",
      team: "75499-TFC-MBA 7800 B90-June 2022-Team 1",
    },
    {
      name: "Maralee Leonard",
      id: "#54639841",
      email: "email@xyz.com",
      opinion: "Operations, Sales",
      team: "75499-TFC-MBA 7800 B90-June 2022-Team 1",
    },
    {
      name: "Partha Ceera",
      id: "#54639841",
      email: "email@xyz.com",
      opinion: "Operations, Sales",
      team: "75499-TFC-MBA 7800 B90-June 2022-Team 1",
    },
    {
      name: "Samantha Johnson",
      id: "#54639641",
      email: "email@xyz.com",
      opinion: "Operations, Sales",
      team: "75499-TFC-MBA 7800 B90-June 2022-Team 1",
    },
    {
      name: "Anantha Reddy Vemunoori",
      id: "#54639841",
      email: "email@xyz.com",
      opinion: "Operations, Sales",
      team: "75499-TFC-MBA 7800 B90-June 2022-Team 1",
    },
    {
      name: "Rajendar Korishetti",
      id: "#54639841",
      email: "email@xyz.com",
      opinion: "Operations, Sales",
      team: "75499-TFC-MBA 7800 B90-June 2022-Team 1",
    },
    {
      name: "Natieya Still",
      id: "#54639841",
      email: "email@xyz.com",
      opinion: "Operations, Sales",
      team: "75499-TFC-MBA 7800 B90-June 2022-Team 1",
    },
    {
      name: "Amber Rox",
      id: "#54639841",
      email: "email@xyz.com",
      opinion: "Operations, Sales",
      team: "75499-TFC-MBA 7800 B90-June 2022-Team 1",
    },
    // Add more users here
  ]);

  return (
    <div className=" bg-gray-100 m-0 px-10 ">
      <div className=" w-full">
        <h3 className="text-2xl px-2 text-start font-semibold mb-4">USERS</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">NAME / ID</th>
              <th className="py-2 px-4 border-b">EMAIL / USERNAME</th>
              <th className="py-2 px-4 border-b">OPINION FOR</th>
              <th className="py-2 px-4 border-b">TEAM NAME</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-200">
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCircleUser} className="mr-2 text-3xl text-gray-500" />
                    <div>
                      <span className="font-semibold">{user.name}</span>
                      <br />
                      <span className="text-red-500">{user.id}</span>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">
                  <span className="text-gray-500">{user.email}</span>
                  <br />
                  <span className="text-xs text-gray-400">
                    {user.email.split("@")[1]}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <span className="text-gray-500">{user.opinion}</span>
                </td>
                <td className="py-2 px-4 border-b w-52">
                  <span className="text-gray-500">{user.team}</span>
                </td>
                <td className="py-2 px-4 border-b">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div className="">
            <span className="text-gray-500">Showing 1 to 10 Out Of 1065</span>
            <button className="px-4 py-2 text-red-500 rounded hover:bg-blue-600">
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download
            </button>
          </div>
          <button className="w-40 text-sm px-4 py-2 bg-red-500 rounded-full text-white  mt-4 hover:bg-gray-700">
            <FontAwesomeIcon icon={faCirclePlus} className="mr-2" /> LOAD MORE
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default BackOfficeUser;
