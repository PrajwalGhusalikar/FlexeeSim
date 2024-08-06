import React from "react";
import TeamTableComponent from "./TeamTableComponent";
import graph from "../Assets/GroupGraph.png";
const GroupsTeamsComponent = () => {
  const teams = [
    {
      name: "Team 01",
      members: [
        {
          name: "Christopher",
          id: "23354824",
          amount: "$968",
          validity: "1 Year",
          image: "path/to/image1",
        },
        {
          name: "Catherine",
          id: "23354824",
          amount: "$968",
          validity: "1 Year",
          image: "path/to/image2",
        },
        {
          name: "Amelia",
          id: "23354824",
          amount: "$968",
          validity: "1 Year",
          image: "path/to/image3",
        },
        {
          name: "Elizabeth",
          id: "23354824",
          amount: "$968",
          validity: "1 Year",
          image: "path/to/image4",
        },
        {
          name: "Charlotte",
          id: "23354824",
          amount: "$968",
          validity: "1 Year",
          image: "path/to/image5",
        },
      ],
      createdOn: "05/23/2024",
    },
    {
      name: "Team 02",
      members: ["04"],
    },
    {
      name: "Team 03",
      members: ["02"],
    },
    {
      name: "Team 04",
      members: [],
    },
  ];

  return (
    <div className="bg-white p-6  mx-auto">
      <div className="grid grid-cols-2 justify-start items-start mb-6">
        <div className="w-full border border-gray-300 p-2">
          <header className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold">GROUPS</div>
          </header>
          <div className="bg-gray-100 flex w-full justify-between p-4 rounded mb-4">
            {/* Placeholder for the graph */}
            <div className="h-32 bg-gray-300 w-96 flex items-center justify-center">
              <img src={graph} alt="" className="h-full w-full" />
            </div>
            <button className="bg-red-500 h-10 text-white px-4 py-2 rounded-lg mb-6">
              + CREATE NEW TEAM
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            {teams.map((team, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 py-2"
              >
                <div className="text-lg">{team.name}</div>
                <div
                  className={`text-red-500 ${
                    team.members.length === 0 ? "text-gray-500" : ""
                  }`}
                >
                  Member{" "}
                  {team.members.length > 0
                    ? `Joined ${team.members.length}`
                    : "Not Added Yet"}
                </div>
                {team.members.length > 0 && (
                  <div className="text-red-500">
                    <span>&rarr;</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <TeamTableComponent />
        </div>
      </div>
    </div>
  );
};

export default GroupsTeamsComponent;
