import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Container } from '@mui/material';
import AttendanceCard from '../Components/AttendanceCard';

import AttendanceChart from '../Components/charts/AttendanceChart';

const Attendance = () => {
  const { present, total } = useSelector((state) => state.attendance);
  const percentage = ((present / total) * 100).toFixed(0);


//To calculate previous dates
// const generatePreviousDates = (count = 10) => {
//   const dates = [];
//   const today = new Date();

//   for (let i = 0; i < count; i++) {
//     const d = new Date();
//     d.setDate(today.getDate() - i);

//     const formatted = d.toISOString().split('T')[0]; // "YYYY-MM-DD"
//     dates.push(formatted);
//   }

//   return dates;
// };

// const previousDates = generatePreviousDates(10);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        py: 2,
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 2, color: '#023E8A' ,textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
        ATTENDANCE
      </Typography>

      <Container maxWidth="sm">
        <AttendanceCard />
      </Container>

      {/* <Typography variant="h5" align="center" sx={{ mt: 4, mb: 2, color: '#023E8A' ,textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
        PREVIOUS ATTENDANCE
      </Typography> */}

      {/* Scrollable row of cards */}
      {/* <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          px: 2,
          width: '100%',
        }}
      >
        {previousDates.map((date, index) => (
          <PrevAttendanceCard key={index} date={date} />
        ))}
      </Box> */}

      <AttendanceChart />
    </Box>
  );
};

export default Attendance;
