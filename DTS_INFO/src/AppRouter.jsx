// src/Router.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationWise  from "./assets/Components/LocationWise.jsx"; // Adjust the import path as necessary

// Import components


function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LocationWise/>} />

      </Routes>
    </Router>
  );
}

export default AppRouter;