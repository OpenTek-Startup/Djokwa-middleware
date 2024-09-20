import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function CalenderIcon({
  width = 28,
  height = 25,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 25"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M21.6313 4.91211H6.18223C4.96333 4.91211 3.97522 5.80754 3.97522 6.91211V20.9121C3.97522 22.0167 4.96333 22.9121 6.18223 22.9121H21.6313C22.8502 22.9121 23.8383 22.0167 23.8383 20.9121V6.91211C23.8383 5.80754 22.8502 4.91211 21.6313 4.91211Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3208 2.91211V6.91211"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.49274 2.91211V6.91211"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.97522 10.9121H23.8383"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CalenderIcon;
