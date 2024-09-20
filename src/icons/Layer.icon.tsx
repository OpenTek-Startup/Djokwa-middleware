import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function LayerIcon({
  width = 25,
  height = 25,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 25"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M12.5 2.5L2.5 7.5L12.5 12.5L22.5 7.5L12.5 2.5Z"
        stroke="#0A4378"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 17.5L12.5 22.5L22.5 17.5"
        stroke="#0A4378"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5L12.5 17.5L22.5 12.5"
        stroke="#0A4378"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LayerIcon;

<svg
  width="25"
  height="25"
  viewBox="0 0 25 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
></svg>;
