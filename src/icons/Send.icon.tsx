import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function SendIcon({
  width = 24,
  height = 23,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 23"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M21.7959 1.7041L11.0204 12.4796"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7959 1.7041L14.9388 21.2959L11.0204 12.4796L2.2041 8.56124L21.7959 1.7041Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SendIcon;
