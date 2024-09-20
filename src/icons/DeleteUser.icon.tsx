import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function DeleteUserIcon({
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
      <g clipPath="url(#clip0_1126_17477)">
        <path
          d="M16.3555 21.5547V19.5547C16.3555 18.4938 15.934 17.4764 15.1839 16.7263C14.4338 15.9761 13.4163 15.5547 12.3555 15.5547H5.35547C4.2946 15.5547 3.27719 15.9761 2.52704 16.7263C1.7769 17.4764 1.35547 18.4938 1.35547 19.5547V21.5547"
          stroke="black"
          strokeWidth="1.41406"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.85547 11.5547C11.0646 11.5547 12.8555 9.76383 12.8555 7.55469C12.8555 5.34555 11.0646 3.55469 8.85547 3.55469C6.64633 3.55469 4.85547 5.34555 4.85547 7.55469C4.85547 9.76383 6.64633 11.5547 8.85547 11.5547Z"
          stroke="black"
          strokeWidth="1.41406"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3555 8.55469L23.3555 13.5547"
          stroke="black"
          strokeWidth="1.41406"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.3555 8.55469L18.3555 13.5547"
          stroke="black"
          strokeWidth="1.41406"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1126_17477">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.355469 0.554688)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DeleteUserIcon;
