import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function GrommetIcon({
  width = 38,
  height = 37,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 38 37"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <g clipPath="url(#clip0_1523_2170)">
        <path
          d="M17.4756 23.2182C22.0468 23.2182 29.6656 29.3133 29.6656 29.3133V4.93311C29.6656 4.93311 22.0468 11.0281 17.4756 11.0281M17.4756 23.2182V11.0281M17.4756 23.2182H9.85676C6.49077 23.2182 3.76172 21.8636 3.76172 17.1232C3.76172 12.3828 6.49077 11.0281 9.85676 11.0281H17.4756M8.333 23.2182L12.9043 35.4083H18.9993L14.428 23.2182M29.6656 21.6945C30.266 21.6945 30.8604 21.5762 31.415 21.3465C31.9696 21.1168 32.4735 20.7801 32.898 20.3556C33.3225 19.9311 33.6592 19.4272 33.889 18.8725C34.1187 18.3179 34.2369 17.7235 34.2369 17.1232C34.2369 16.5229 34.1187 15.9284 33.889 15.3738C33.6592 14.8192 33.3225 14.3153 32.898 13.8908C32.4735 13.4663 31.9696 13.1296 31.415 12.8999C30.8604 12.6701 30.266 12.5519 29.6656 12.5519M17.4756 29.3133C18.9993 29.3133 22.0468 27.7895 22.0468 24.742"
          stroke="black"
          strokeWidth="1.46281"
        />
      </g>
      <defs>
        <clipPath id="clip0_1523_2170">
          <rect
            width="36.5702"
            height="36.5702"
            fill="white"
            transform="translate(0.713867 0.361816)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default GrommetIcon;
