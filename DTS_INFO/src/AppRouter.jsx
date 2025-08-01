import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationWise from "./Components/LocationWise.jsx";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LocationWise />} />
        {/* Add more routes here when needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
