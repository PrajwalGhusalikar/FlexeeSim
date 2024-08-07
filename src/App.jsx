import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import DecisionPreview from "./components/DecisionsPreview";
import Features from "./components/Features";
import FlexeeOverview from "./components/FlexeeOverview";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Values from "./components/Values";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ExploreSim from "./components/ExploreSim";
import CourseComponent from "./components/CourseComponent";
import GroupsTeamsComponent from "./components/GroupsTeamsComponent";
import StudentRequest from "./components/StudentRequest";
import DashboardNavbar from "./components/DashboardNavbar";
import Register from "./components/Register";
import BackOfficeUser from "./components/Backoffice/BackOfficeUser";
import BackOfficeConnecting from "./components/Backoffice/BackOfficeConnecting";
import BackOfficeNavbar from "./components/Backoffice/BackOfficeNavbar";
import BackOfficeSidebar from "./components/Backoffice/BackOfficeSidebar";
import BackOfficeFooter from "./components/Backoffice/BackOfficeFooter";
import BackOfficeRankings from "./components/Backoffice/BackOfficeRankings";
import BackOfficeReports from "./components/Backoffice/BackOfficeReports";
import BackOfficeFAQS from "./components/Backoffice/BackOfficeFAQS";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="pt-20">
                <Navbar />
                <Home />
                <FlexeeOverview />
                <Testimonials />
                <Values />
                <DecisionPreview />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/aboutus"
            element={
              <div className="pt-20">
                <Navbar />
                <AboutUs />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/features"
            element={
              <div className="pt-20">
                <Navbar /> <Features />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/preview"
            element={
              <div className="pt-20">
                <Navbar />
                <DecisionPreview />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <div className="mt-48">
                <DashboardNavbar />
                <Dashboard />
                <ExploreSim />

                <StudentRequest />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/backoffice"
            element={
              <div className="">
                <BackOfficeConnecting />
              </div>
            }
          />
          <Route
            exact
            path="/backoffice/user"
            element={
              <div className="">
                <BackOfficeNavbar />
                <BackOfficeSidebar />
                <div className="mt-28 ml-60">
                  <BackOfficeUser />
                </div>
                <BackOfficeFooter/>
              </div>
            }
          />
          <Route
            exact
            path="/backoffice/rankings"
            element={
              <div className="">
                <BackOfficeNavbar />
                <BackOfficeSidebar />
                <div className="mt-28 ml-60">
                  <BackOfficeRankings />
                </div>
                <BackOfficeFooter/>
              </div>
            }
          />
          <Route
            exact
            path="/backoffice/reports"
            element={
              <div className="">
                <BackOfficeNavbar />
                <BackOfficeSidebar />
                <div className="mt-28 ml-60">
                  <BackOfficeReports />
                </div>
                <BackOfficeFooter/>
              </div>
            }
          />
          <Route
            exact
            path="/backoffice/faqs"
            element={
              <div className="">
                <BackOfficeNavbar />
                <BackOfficeSidebar />
                <div className="mt-28 ml-60">
                  <BackOfficeFAQS />
                </div>
                <BackOfficeFooter/>
              </div>
            }
          />
          <Route
            exact
            path="/dashboard/courses"
            element={
              <div className="mt-48">
                <DashboardNavbar />
                <CourseComponent />
                <GroupsTeamsComponent />
                <StudentRequest />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <div className="">
                <Register />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
