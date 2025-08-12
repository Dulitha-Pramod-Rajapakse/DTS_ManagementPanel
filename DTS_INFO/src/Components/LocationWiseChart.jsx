import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './LocationWise.css';

const dataset = [
  { role: 'Others', available: 20, strength: 35 },
  { role: 'Services', available: 30, strength: 50 },
  { role: 'Scaffolding', available: 8, strength: 15 },
  { role: 'Afloat', available: 35, strength: 45 },
  { role: 'Piping', available: 30, strength: 35 },
  { role: 'HUC', available: 80, strength: 90 },
  { role: 'HUR', available: 35, strength: 40 },
];

const chartSetting = {
  xAxis: [{ label: 'Count' }],
  height: 400,
  margin: { left: 120 }, // Adjust to fit longer role names
};

export default function LocationWiseChart() {
  return (
    <div>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'role' }]}
        series={[
          { dataKey: 'available', label: 'Available', color: '#0D2C54' },
          { dataKey: 'strength', label: 'Strength', color: '#5BC0EB' },
        ]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
}
