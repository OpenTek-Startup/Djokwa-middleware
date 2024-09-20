import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function RightChevronIcon({
  width = 12,
  height = 6,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 6"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M1 13.8779L7 7.87793L1 1.87793"
        stroke="#5F0F40"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default RightChevronIcon;
