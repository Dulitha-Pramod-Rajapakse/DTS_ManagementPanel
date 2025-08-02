import * as React from 'react';
import { useAnimate } from '@mui/x-charts/hooks';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { styled } from '@mui/material/styles';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';

export default function DesignationWiseChart() {
  return (
    <ChartContainer
      xAxis={[{
        scaleType: 'band',
        data: [
          'Welders', 'Class Welders', 'Fabricators', 'Scaffolders',
          'Forklift Operators', 'Cherry Picker', 'Industril Workers',
          'Supervisors', 'Engineers', 'GroupLeaders'
        ]
      }]}
      series={[{
        type: 'bar',
        id: 'base',
        data: [89, 55, 5, 30, 20, 33, 40, 10, 20, 89],
        color: '#00CED1'
      }]}
      height={400}
      yAxis={[{ width: 40 }]}
      margin={{ left: 40, right: 10 }}
    >
      <BarPlot barLabel="value" slots={{ barLabel: BarLabel }} />
      <ChartsXAxis />
      <ChartsYAxis />
    </ChartContainer>
  );
}

const Text = styled('text')(({ theme }) => ({
  ...(theme?.typography?.body2 || {}),
  stroke: 'none',
  fill: (theme?.vars || theme)?.palette?.text?.primary || '#333',
  transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  pointerEvents: 'none',
}));

function BarLabel(props) {
  const {
    value,
    x,
    y,
    width,
    height,
    xOrigin,
    yOrigin,
    layout,
    color,
    skipAnimation,
    ...otherProps
  } = props;

  const labelX = layout === 'horizontal' ? x + width + 8 : x + width / 2;
  const labelY = layout === 'horizontal' ? y + height / 2 : y - 8;

  const animatedProps = useAnimate(
    { x: labelX, y: labelY },
    {
      initialProps: {
        x: layout === 'horizontal' ? xOrigin + width + 8 : xOrigin + width / 2,
        y: layout === 'horizontal' ? yOrigin + height / 2 : yOrigin,
      },
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());
      },
      skip: skipAnimation,
    }
  );

  return (
    <Text {...otherProps} fill={color} {...animatedProps}>
      {value}
    </Text>
  );
}
