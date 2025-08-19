// components/FilteredLocationCountTable.jsx
import React from "react";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function FilteredLocationCountTable() {
  const locations = useSelector((state) => state.locationData.locations);

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "600px",
        margin: "30px auto",
        fontFamily: "'Segoe UI', sans-serif",
        overflowX: "auto"
      }}
    >
      {/* Navbar Dropdown */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse text-start"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Welders</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Class Welders</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Fabricators</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Scaffolders</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Forklift Operators</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Cherry Pickers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Industrial Worker</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Supervisor</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Engineers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Group Leaders</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar Dropdown */}

      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: "12px 12px"
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "center",
                padding: "8px 12px",
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "12px",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#5bc0eb",
                color: "white"
              }}
            >
              Location
            </th>
            <th
              style={{
                textAlign: "center",
                padding: "8px 12px",
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "12px",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#19357B",
                color: "white"
              }}
            >
              Available
            </th>
          </tr>
        </thead>
        <tbody>
          {locations.map(({ location, available }) => (
            <tr key={location}>
              <td
                style={{
                  textAlign: "center",
                  padding: "8px 12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #ccc",
                  backgroundColor: "#5bc0eb",
                  color: "white"
                }}
              >
                {location}
              </td>
              <td
                style={{
                  textAlign: "center",
                  padding: "8px 12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #ccc",
                  backgroundColor: "#E1E4E6",
                  color: "#192C5E"
                }}
              >
                {available}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}