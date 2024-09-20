import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function EyeopenIcon({
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
      <g clipPath="url(#clip0_1126_17471)">
        <path
          d="M1.67578 12.4336C1.67578 12.4336 5.67578 4.43359 12.6758 4.43359C19.6758 4.43359 23.6758 12.4336 23.6758 12.4336C23.6758 12.4336 19.6758 20.4336 12.6758 20.4336C5.67578 20.4336 1.67578 12.4336 1.67578 12.4336Z"
          stroke="black"
          strokeWidth="1.41406"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.6758 15.4336C14.3326 15.4336 15.6758 14.0904 15.6758 12.4336C15.6758 10.7767 14.3326 9.43359 12.6758 9.43359C11.0189 9.43359 9.67578 10.7767 9.67578 12.4336C9.67578 14.0904 11.0189 15.4336 12.6758 15.4336Z"
          stroke="black"
          strokeWidth="1.41406"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1126_17471">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.675781 0.433594)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default EyeopenIcon;
