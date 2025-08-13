import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationWise from "./layouts/LocationWise.jsx";
import DesignationWise from "./Components/DesignationWise.jsx";
import Header from "./Components/Header/Header.jsx";

import Attendance from "./layouts/attendance.jsx";


function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<DesignationWise />} /> */}
         {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/LocationWise" element={<LocationWise/>}/>
        <Route path="/attendance" element={<Attendance />} />
        {/* Add more routes here when needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
