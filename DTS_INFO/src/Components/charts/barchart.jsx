import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';

const data = [
  { date: '10-Jul', attendance: 270 },
  { date: '11-Jul', attendance: 267 },
  { date: '12-Jul', attendance: 219 },
  { date: '13-Jul', attendance: 228 },
  { date: '14-Jul', attendance: 201 },
  { date: '15-Jul', attendance: 150 },
  { date: '16-Jul', attendance: 249 },
  { date: '17-Jul', attendance: 261 },
];

function AttendanceBarChart() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h3 style={{ textAlign: 'center' }}>Daily Total Attendance</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={[0, 300]}
            tickFormatter={(value) => `${(value / 300) * 100}%`}
          />
          <Tooltip formatter={(value) => `${value} attendees`} />
          <Bar dataKey="attendance" fill="#1f77b4" barSize={35}>
            <LabelList dataKey="attendance" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceBarChart;
