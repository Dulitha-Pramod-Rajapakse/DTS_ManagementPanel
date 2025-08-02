import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';

const AttendanceCard = () => {
  const { present, total } = useSelector((state) => state.attendance);
  const percentage = ((present / total) * 100).toFixed(0);

  return (
    <Paper
      elevation={4}
      sx={{
        width: '100%',
        maxWidth: 400,
        p: 3,
        borderRadius: 4,
        backgroundColor: '#2A9FCF',
        color: '#fff',
        textAlign: 'center',
        mx: 'auto',
        my: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Today Attendance
      </Typography>
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 ,color: 'black'}}>
        {present}/{total}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Today Attendance Percentage
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        {percentage}%
      </Typography>
    </Paper>
  );
};

export default AttendanceCard;
