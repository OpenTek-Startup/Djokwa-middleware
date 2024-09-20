import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function PlusIcon({
  width = 32,
  height = 32,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M16 29.3332C23.3638 29.3332 29.3334 23.3636 29.3334 15.9998C29.3334 8.63604 23.3638 2.6665 16 2.6665C8.63622 2.6665 2.66669 8.63604 2.66669 15.9998C2.66669 23.3636 8.63622 29.3332 16 29.3332Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10.6665V21.3332"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 16H21.3334"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PlusIcon;
