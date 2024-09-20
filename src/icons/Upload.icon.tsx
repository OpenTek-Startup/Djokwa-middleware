import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function UploadIcon({
  width = 24,
  height = 25,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M21 15.2812V19.2812C21 19.8117 20.7893 20.3204 20.4142 20.6955C20.0391 21.0705 19.5304 21.2812 19 21.2812H5C4.46957 21.2812 3.96086 21.0705 3.58579 20.6955C3.21071 20.3204 3 19.8117 3 19.2812V15.2812"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8.28125L12 3.28125L7 8.28125"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.28125V15.2812"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UploadIcon;
