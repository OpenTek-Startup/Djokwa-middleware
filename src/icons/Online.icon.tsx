import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function OnlineIcon({
  width = 10,
  height = 11,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 11"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M5 9.5C7.20914 9.5 9 7.70914 9 5.5C9 3.29086 7.20914 1.5 5 1.5C2.79086 1.5 1 3.29086 1 5.5C1 7.70914 2.79086 9.5 5 9.5Z"
        fill="#146301"
        stroke="#146301"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default OnlineIcon;
