import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function DashboardIcon({
  width = 36,
  height = 36,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M2 4.83498C2 4.0831 2.33566 3.36201 2.93313 2.83035C3.5306 2.29868 4.34094 2 5.1859 2H14.7436V27.5148H5.1859C4.34094 27.5148 3.5306 27.2162 2.93313 26.6845C2.33566 26.1528 2 25.4317 2 24.6799V4.83498ZM21.1154 2H30.6731C31.518 2 32.3284 2.29868 32.9258 2.83035C33.5233 3.36201 33.859 4.0831 33.859 4.83498V11.9224H21.1154V2ZM21.1154 17.5924H33.859V24.6799C33.859 25.4317 33.5233 26.1528 32.9258 26.6845C32.3284 27.2162 31.518 27.5148 30.6731 27.5148H21.1154V17.5924Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DashboardIcon;
