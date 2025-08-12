import * as React from 'react';
import './LocationWise.css';
import 'bootstrap/dist/css/bootstrap.css';
import LocationWiseChart from '../Components/LocationWiseChart.jsx';
import AvailabilityTableLocationWise from '../Components/AvailabilityTableLocationWise.jsx';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

export default function LocationWise() {
  return (
      <Box className="container">
        
          <h1 className="Topic">EMPLOYEE ATTENDANCE BASED ON LOCATION</h1>
           <div className="chart-container">
            <LocationWiseChart />
          </div>
          <div className="table-container">
            <AvailabilityTableLocationWise />
          </div>
      </Box>
  );
}

