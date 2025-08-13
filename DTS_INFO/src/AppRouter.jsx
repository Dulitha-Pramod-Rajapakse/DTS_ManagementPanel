import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationWise from "./layouts/LocationWise.jsx";
import DesignationWise from "./Components/DesignationWise.jsx";
import DailyDeployment from "./layouts/DailyDeployment.jsx";
import EmployeeList from "./Components/EmployeeList.jsx";
import Header from "./Components/Header/Header.jsx"; 
import Attendance from "./layouts/attendance.jsx";
import HomeLayout from "./layouts/Home.jsx";



function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<DesignationWise />} /> */}
        <Route path="/" element={<HomeLayout />} />


        <Route path="/employees/:code" element={<EmployeeList />} />

        <Route path="/daily-deployment" element={<DailyDeployment />} />
         {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/LocationWise" element={<LocationWise/>}/>
        <Route path="/attendance" element={<Attendance />} />


        {/* Add more routes here when needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;