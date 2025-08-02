import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AttendanceCard from './components/AttendanceCard';
import Attendance from './layouts/attendance';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        bgcolor: '#f0f2f5',
        p: 2,
      }}
    >
      <Attendance />
    </Box>
  );
}

export default App;
