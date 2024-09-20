import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function MailIcon({
  width = 25,
  height = 24,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <g clipPath="url(#clip0_1665_769)">
        <path
          d="M4.25 3.99072H20.25C21.35 3.99072 22.25 4.89072 22.25 5.99072V17.9907C22.25 19.0907 21.35 19.9907 20.25 19.9907H4.25C3.15 19.9907 2.25 19.0907 2.25 17.9907V5.99072C2.25 4.89072 3.15 3.99072 4.25 3.99072Z"
          stroke="#142E6E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.25 5.99072L12.25 12.9907L2.25 5.99072"
          stroke="#142E6E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1665_769">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.25 -0.00927734)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MailIcon;
