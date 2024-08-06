import React from "react";
import backgroundImage2 from "../Assets/ExploreSim.png";

const TeamTableComponent = () => {
  const teamMembers = [
    {
      name: "Christopher",
      id: "23354824",
      amount: "$968",
      validity: "1 Year",
      image: backgroundImage2,
    },
    {
      name: "Catherine",
      id: "23354824",
      amount: "$968",
      validity: "1 Year",
      image: backgroundImage2,
    },
    {
      name: "Amelia",
      id: "23354824",
      amount: "$968",
      validity: "1 Year",
      image: backgroundImage2,
    },
    {
      name: "Elizabeth",
      id: "23354824",
      amount: "$968",
      validity: "1 Year",
      image: backgroundImage2,
    },
    {
      name: "Charlotte",
      id: "23354824",
      amount: "$968",
      validity: "1 Year",
      image: backgroundImage2,
    },
  ];

  return (
    <div className="bg-white p-6 pt-0 w-full mx-auto">
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">TEAM 01</div>
          <div className="text-gray-500 flex items-center">
            <i className="fa-solid fa-calendar-alt text-red-500 mr-2"></i>
            CREATED ON: 05/23/2024
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-500 flex items-center">
            <i className="fa-solid fa-arrow-left text-red-500 mr-2"></i>
            <i className="fa-solid fa-arrow-right text-red-500"></i>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-500 h-4 w-4 rounded-full mr-2"></div>
            <div className="text-sm">Email Sent</div>
            <div className="bg-blue-500 h-4 w-4 rounded-full ml-4 mr-2"></div>
            <div className="text-sm">Read</div>
            <div className="bg-red-500 h-4 w-4 rounded-full ml-4 mr-2"></div>
            <div className="text-sm">Unread</div>
          </div>
        </div>
        <div className="h-96 overflow-y-scroll">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Received Amount</th>
                <th className="py-2 px-4 text-left">Validity</th>
                <th className="py-2 px-4 text-center">-</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-4 flex items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="text-lg font-bold">{member.name}</div>
                      <div className="text-sm text-gray-500">#{member.id}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-green-500 ">
                    <span className="mr-2">{member.amount}</span>
                    <i className="fa-solid fa-check-circle"></i>
                  </td>
                  <td className="py-4 px-4 text-gray-500">{member.validity}</td>
                  <td className="py-4 px-4 flex items-center justify-center">
                    <i className="fa-solid fa-chevron-right text-blue-500"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamTableComponent;
