// LocationWiseChartLayout.js
import React, { useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import '../layouts/LocationWise.css';

const dataset = [
  { role: 'Others', available: 20, strength: 35 },
  { role: 'Services', available: 30, strength: 50 },
  { role: 'Scaffolding', available: 8, strength: 15 },
  { role: 'Afloat', available: 35, strength: 45 },
  { role: 'Piping', available: 30, strength: 35 },
  { role: 'HUC', available: 80, strength: 90 },
  { role: 'HUR', available: 35, strength: 40 },
];

export default function LocationWiseChart() {
  const [chartWidth, setChartWidth] = React.useState(window.innerWidth * 0.9);

  React.useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.9); // 90% of viewport width
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'role' }]}
        series={[
          { dataKey: 'available', label: 'Available', color: '#0D2C54' },
          { dataKey: 'strength', label: 'Strength', color: '#5BC0EB' },
        ]}
        layout="horizontal"
        xAxis={[{ label: 'Count' }]}
        width={chartWidth}
        height={400}
        margin={{ right: 50 }}
      />
    </div>
  );
}
