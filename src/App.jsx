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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="pt-20">
                <Home />
                <FlexeeOverview />
                <Testimonials />
                <Values />
                <DecisionPreview />
              </div>
            }
          />
          <Route
            exact
            path="/aboutus"
            element={
              <div className="pt-20">
                <AboutUs />
              </div>
            }
          />
          <Route
            exact
            path="/features"
            element={
              <div className="pt-20">
                {" "}
                <Features />
              </div>
            }
          />
          <Route
            exact
            path="/preview"
            element={
              <div className="pt-20">
                <DecisionPreview />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
