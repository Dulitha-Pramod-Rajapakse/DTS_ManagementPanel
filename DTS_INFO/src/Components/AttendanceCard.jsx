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
        maxWidth: 330,
        p: 2,
        borderRadius: 7,
        backgroundColor: '#2A9FCF',
        color: '#fff',
        textAlign: 'left',
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
      <Typography variant="h4" fontWeight="bold" align="right" sx={{ paddingRight : 2 }}>
        {percentage}%
      </Typography>
    </Paper>
  );
};

export default AttendanceCard;
