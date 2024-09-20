import * as React from 'react';
import { IconPropsType } from '../types/input.type';

function Arrowpointright({
  width = 24,
  height = 24,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      className="size-3 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  );
}

export default Arrowpointright;
