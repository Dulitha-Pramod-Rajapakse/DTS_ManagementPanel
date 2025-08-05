// src/App.jsx
import React from "react";
import Header from "./components/Header/Header.jsx"; // Adjust path if in layout or shared folder
import DoughnutChart from "./components/charts/piechart.jsx"; // Adjust path if in layout or shared folder
import GroupedBarChart from "./components/charts/horizontalBarChart.jsx"; // Adjust path if in layout or shared folder
import AttendanceBarChart from "./components/charts/barchart.jsx"; // Adjust path if in layout or shared folder

const App = () => {
  return (
    <div>
      <Header />
      <DoughnutChart /> {/* Render the DoughnutChart component */}
      <GroupedBarChart /> {/* Render the GroupedBarChart component */}
      <AttendanceBarChart /> {/* Render the AttendanceBarChart component */}
      {/* Add more components below when needed */}
    </div>
  );
};

export default App;
