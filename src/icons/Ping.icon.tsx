import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function PingIcon({
  width = 16,
  height = 16,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M13.4934 8.16C14.2439 7.40944 14.6656 6.39145 14.6656 5.33C14.6656 4.26854 14.2439 3.25056 13.4934 2.5C12.7428 1.74944 11.7248 1.32777 10.6634 1.32777C9.60192 1.32777 8.58394 1.74944 7.83337 2.5L3.33337 7V12.6667H9.00004L13.4934 8.16Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 5.33334L1.33337 14.6667"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PingIcon;
