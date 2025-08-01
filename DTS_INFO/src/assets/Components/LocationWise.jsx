import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './LocationWise.css';

const dataset = [
  { month: 'Jan', seoul: 49 },
  { month: 'Feb', seoul: 71 },
  { month: 'Mar', seoul: 78 },
  { month: 'Apr', seoul: 57 },
  { month: 'May', seoul: 40 },
  { month: 'Jun', seoul: 62 },
];

const chartSetting = {
  xAxis: [{ label: 'Rainfall (mm)' }],
  height: 400,
  margin: { left: 0 },
};

const valueFormatter = (value) => `${value} mm`;

export default function LocationWise() {
  return (
    <div>
      <h1 className="Topic">Employee Attendance based on location</h1>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
}
