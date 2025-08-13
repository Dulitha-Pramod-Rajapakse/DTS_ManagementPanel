import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationWise from "./Components/LocationWise.jsx";
import DesignationWise from "./Components/DesignationWise.jsx";
import DailyDeployment from "./layouts/DailyDeployment.jsx";
import EmployeeList from "./Components/EmployeeList.jsx";
import Header from "./Components/Header/Header.jsx"; 

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<DesignationWise />} /> */}
        <Route path="/" element={<LocationWise/>}/>
        <Route path="/dailyDeployment" element={<DailyDeployment />} />
        <Route path="/employees/:code" element={<EmployeeList />} />
        {/* Add more routes here when needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;