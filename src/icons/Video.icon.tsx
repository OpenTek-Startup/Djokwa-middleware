/* eslint-disable tailwindcss/no-custom-classname */
import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function VideoIcon({
  width = 24,
  height = 25,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-big-left"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <g clipPath="url(#clip0_744_20253)">
        <path
          d="M23 7.5L16 12.5L23 17.5V7.5Z"
          stroke="#2662F0"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 5.5H3C1.89543 5.5 1 6.39543 1 7.5V17.5C1 18.6046 1.89543 19.5 3 19.5H14C15.1046 19.5 16 18.6046 16 17.5V7.5C16 6.39543 15.1046 5.5 14 5.5Z"
          stroke="#2662F0"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_744_20253">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default VideoIcon;
