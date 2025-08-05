import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Others', Available: 20, Strength: 35 },
  { name: 'Services', Available: 30, Strength: 50 },
  { name: 'Sacffolding', Available: 8, Strength: 15 },
  { name: 'Afloat', Available: 35, Strength: 45 },
  { name: 'Piping', Available: 30, Strength: 35 },
  { name: 'HUC', Available: 80, Strength: 90 },
  { name: 'HUR', Available: 35, Strength: 40 }
];

function GroupedBarChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Available" fill="#00BFFF" barSize={15} />
        <Bar dataKey="Strength" fill="#00008B" barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GroupedBarChart;
