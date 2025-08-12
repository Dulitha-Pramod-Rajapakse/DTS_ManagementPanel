import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

// Sample data (replace with real attendance data)
const data = [
  { date: 'Aug 1', percentage: 80 },
  { date: 'Aug 2', percentage: 90 },
  { date: 'Aug 3', percentage: 70 },
  { date: 'Aug 4', percentage: 100 },
  { date: 'Aug 5', percentage: 60 },
];

const AttendanceChart = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: '100%',
        maxWidth: 400,
        p: 1,
        borderRadius: 4,
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        Daily Total Attendance

      </Typography>
      <Box sx={{ width: '90%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="percentage" fill="#2A9FCF" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default AttendanceChart;
