import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';
import AttendanceCard from '../components/AttendanceCard';

const Attendance = () => {
  const { present, total } = useSelector((state) => state.attendance);
  const percentage = ((present / total) * 100).toFixed(0);

  return (
    <Box>
      <Typography variant="h5" align='center' sx={{ mb: 1, color: '#023E8A' }}>
        ATTENDANCE
      </Typography>
      <br />
      <AttendanceCard />
    </Box>
  );
};

export default Attendance;
