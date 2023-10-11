import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import AddProjects from "./AddProjects";
import LogIn from "./LogIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={LogIn} />
      <Route path="/projects" Component={Projects} />
      <Route path="/add/project" Component={AddProjects} />
      <Route path="/home" Component={Home} />
     
    </Routes>
  );
};

export default AllRoutes;
