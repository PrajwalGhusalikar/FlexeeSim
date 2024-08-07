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
import { Link, useLocation } from "react-router-dom";

const BackOfficeSidebar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="w-60 fixed top-12   z-50 left-0 h-full min-h-screen text-start bg-[#0E406A] text-gray-300 p-4">
        <ul>
          <li className="mb-2">
            <Link
              to="/backoffice/user"
              className={`hover:text-gray-500 ${
                location.pathname === "/backoffice/user"
                  ? "text-red-500"
                  : "text-blue-500"
              }`}
            >
              View Users
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/backoffice/user"
              className={`hover:text-gray-500 ${
                location.pathname === "/" ? "text-red-500" : "text-blue-500"
              }`}
            >
              Calculate
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/backoffice/rankings"
              className={`hover:text-gray-500 ${
                location.pathname === "/backoffice/rankings"
                  ? "text-red-500"
                  : "text-blue-500"
              }`}
            >
              Ranking
            </Link>
          </li>

          <hr />
          <li className="mb-4">
            <h2 className="text-lg font-semibold mb-2 text-blue-500 mt-2">
              REPORTS
            </h2>
            <ul>
              <li className="mb-1">
                <Link
                  to="/"
                  className={`hover:text-gray-500 ${
                    location.pathname === "/" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  Trainer/Teacher Feedback
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/backoffice/reports"
                  className={`hover:text-gray-500 ${
                    location.pathname === "/backoffice/reports"
                      ? "text-red-500"
                      : "text-blue-500"
                  }`}
                >
                  Onsite Reporting
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/"
                  className={`hover:text-gray-500 ${
                    location.pathname === "/" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  KPI Reports
                </Link>
              </li>
            </ul>
          </li>
          <hr />
          <li className="mb-4">
            <h2 className="text-lg font-semibold mb-2 mt-2 text-blue-500">
              QUESTIONNAIRE
            </h2>
            <ul>
              <li className="mb-1">
                <Link
                  to="/"
                  className={`hover:text-gray-500 ${
                    location.pathname === "/" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  Teamrole Answers
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/"
                  className={`hover:text-gray-500 ${
                    location.pathname === "/" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  Metaprogram Answers
                </Link>
              </li>
            </ul>
          </li>
          <hr />

          <li className="mb-4">
            <h2 className="text-lg font-semibold mb-2 mt-2 text-blue-500">
              OTHERS
            </h2>
            <ul>
              <li className="mb-1">
                <Link
                  to="/backoffice/faqs"
                  className={`hover:text-gray-500 ${
                    location.pathname === "/backoffice/faqs"
                      ? "text-red-500"
                      : "text-blue-500"
                  }`}
                >
                  FAQs
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/"
                  className={`hover:text-gray-500 ${
                    location.pathname === "/" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  Manage Pool
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackOfficeSidebar;
