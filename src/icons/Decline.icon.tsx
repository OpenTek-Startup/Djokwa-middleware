import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function DeclineIcon({
  width = 18,
  height = 17,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 17"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <g clipPath="url(#clip0_1558_610)">
        <path
          d="M9.02753 15.2694C12.8607 15.2694 15.9681 12.162 15.9681 8.3288C15.9681 4.4956 12.8607 1.38818 9.02753 1.38818C5.19433 1.38818 2.08691 4.4956 2.08691 8.3288C2.08691 12.162 5.19433 15.2694 9.02753 15.2694Z"
          stroke="#FF0909"
          strokeWidth="2.08218"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1094 6.24658L6.94507 10.4109"
          stroke="#FF0909"
          strokeWidth="2.08218"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.94507 6.24658L11.1094 10.4109"
          stroke="#FF0909"
          strokeWidth="2.08218"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1558_610">
          <rect
            width="16.6575"
            height="16.6575"
            fill="white"
            transform="translate(0.69873)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DeclineIcon;
