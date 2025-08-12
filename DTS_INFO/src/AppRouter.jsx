import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationWise from "./layouts/LocationWise.jsx";
import DesignationWise from "./Components/DesignationWise.jsx";
import Header from './Components/Header/Header.jsX';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<DesignationWise />} /> */}
        <Route path="/" element={<LocationWise/>}/>
        {/* Add more routes here when needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
