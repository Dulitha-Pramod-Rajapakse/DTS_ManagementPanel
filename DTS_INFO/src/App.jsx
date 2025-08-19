// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import HomeLayout from "./layouts/Home.jsx";
import DesignationWise from "./layouts/DesignationWise.jsx";
import LocationWise from "./layouts/LocationWise.jsx";
import DailyDeployment from "./layouts/DailyDeployment.jsx";
import EmployeeList from "./Components/EmployeeList.jsx";
import Attendance from "./layouts/attendance.jsx";
import LogIn from "./Components/Login.jsx";
import "./App.css";

// Wrapper to conditionally render Header
function AppWrapper() {
  const location = useLocation();
  const hideHeaderPaths = ["/Login"];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/DesignationWise" element={<DesignationWise />} />
        <Route path="/employees/:code" element={<EmployeeList />} />
        <Route path="/dailyDeployment" element={<DailyDeployment />} />
        <Route path="/LocationWise" element={<LocationWise />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
