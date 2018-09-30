import React from 'react';

/**
 * 
 * Simple chart CSS
 * Example from: 
 * https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705
 * 
*/

const Chart = props => (
  <svg viewBox="0 0 36 36" className="circular-chart">
    <path className="circle"
      stroke={ props.stroke ? props.stroke : '#ff6868' }
      strokeDasharray={`${props.percentage}, 100`}
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
    />
  </svg>
);

export default Chart;