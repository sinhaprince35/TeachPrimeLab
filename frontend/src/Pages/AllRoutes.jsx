import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import AddProjects from './AddProjects';

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/projects' Component={Projects} />
          <Route path='/add/project' Component={AddProjects}/>
    </Routes>
  )
}

export default AllRoutes
