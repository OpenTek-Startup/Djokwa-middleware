import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function PerformanceIcon({
  width = 36,
  height = 33,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 33"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M9.25 27.641V14.3076"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 27.6409V6.30762"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.75 27.6416V19.6416"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PerformanceIcon;
