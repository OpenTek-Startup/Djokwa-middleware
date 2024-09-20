import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function LeftChevronIcon({
  width = 8,
  height = 15,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 15"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M7 1.87793L1 7.87793L7 13.8779"
        stroke="#5F0F40"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LeftChevronIcon;

<svg
  width="8"
  height="15"
  viewBox="0 0 8 15"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
></svg>;
