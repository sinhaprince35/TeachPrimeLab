import React, { useEffect, useState } from "react";
import "../Styles/home.css";
import logo from '../Assets/Logo.svg';
import Dashboard from '../Assets/Dashboard.svg';
import Dashboard_active from '../Assets/Dashboard-active.svg';
import Create_Project from '../Assets/create-project.svg';
import Create_Project_active from '../Assets/create-project-active.svg';
import Project_list from '../Assets/Project-list.svg';
import Project_list_active from '../Assets/Project-list-active.svg';
import ExitIcon from '../Assets/Logout.svg';
import PcBackground from '../Assets/Header-bg.svg';
import MobileBackground from '../Assets/login-bg-1.svg';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import CreateProject from './Projects';
// import BarChart from '../../Dashboard/Chat';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [activeIcon, setActiveIcon] = useState("dashboard");
  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`Main_container ${isMobile ? "mobile" : ""}`}>
      <div className={`sidebar ${isMobile ? "mobile" : ""}`}>
        {/* Sidebar content goes here */}
        <div className="sidebar-icons">
          <div
            className={`sidebar-icon ${
              activeIcon === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleIconClick("dashboard")}
          >
            {/* Dashboard */}
            <img
              src={activeIcon === "dashboard" ? Dashboard_active : Dashboard}
              alt="Dashboard"
            />
          </div>
          <div
            className={`sidebar-icon ${
              activeIcon === "project_list" ? "active" : ""
            }`}
            onClick={() => handleIconClick("project_list")}
          >
            {/* Project List */}
            <img
              src={
                activeIcon === "project_list"
                  ? Project_list_active
                  : Project_list
              }
              alt="Project List"
            />
          </div>
          <div
            className={`sidebar-icon ${
              activeIcon === "create_project" ? "active" : ""
            }`}
            onClick={() => handleIconClick("create_project")}
          >
            {/*  Create Project*/}
            <img
              src={
                activeIcon === "create_project"
                  ? Create_Project_active
                  : Create_Project
              }
              alt="Create Project"
            />
          </div>
          <div className="sidebar-exit-icon">
            {/* Exit Icon */}
            <img src={ExitIcon} alt="Exit" />
          </div>
        </div>
      </div>
      <div className={`body ${isMobile ? "mobile" : ""}`}>
        <nav className="DashboardNav">
          <div className="background_img">
            <img
              src={isMobile ? MobileBackground : PcBackground}
              alt="Background"
            ></img>
          </div>

          <div className="Logo_bar">
            <h3>Create Project</h3>
            <img src={logo} alt="Logo"></img>
          </div>
        </nav>
        {/* Body content goes here */}
        <div className="ContentArea">
          {/* <CreateProject /> */}
          {/* <BarChart/>  */}
          <Routes>
            <Route
              path={activeIcon === "dashboard" ? "/" : "null"}
            //   element={<BarChart />}
            />
            <Route
              path={activeIcon === "create_project" ? "/" : "null"}
              element={<CreateProject />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
