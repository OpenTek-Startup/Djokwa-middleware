import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function ActivePingIcon({
  width = 16,
  height = 16,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="icon icon-tabler icon-tabler-arrow-big-left"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <g clipPath="url(#clip0_1705_4097)">
        <path
          d="M13.4933 8.1601C14.2439 7.40954 14.6656 6.39156 14.6656 5.3301C14.6656 4.26865 14.2439 3.25067 13.4933 2.50011C12.7428 1.74954 11.7248 1.32788 10.6633 1.32788C9.60189 1.32788 8.58391 1.74954 7.83334 2.50011L3.33334 7.00011V12.6668H9.00001L13.4933 8.1601Z"
          stroke="#FF7A00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6667 5.33325L1.33334 14.6666"
          stroke="#FF7A00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6667 10H6"
          stroke="#FF7A00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1705_4097">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ActivePingIcon;
