import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function ChevrondownIcon({
  width = 24,
  height = 25,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M6 9.5L12 15.5L18 9.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevrondownIcon;
