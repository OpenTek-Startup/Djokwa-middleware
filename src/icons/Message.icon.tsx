import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function MessageIcon({
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
      <path
        d="M20.2329 6.86426V10.1591C20.2329 11.9069 19.5653 13.583 18.3768 14.8188C17.1884 16.0546 15.5765 16.7489 13.8958 16.7489H12.039L9.24121 19.6599C9.68481 19.9054 10.1902 20.0438 10.7273 20.0438H13.8958L18.6487 24.9861V20.0438H21.8172C22.6576 20.0438 23.4635 19.6967 24.0577 19.0787C24.652 18.4608 24.9858 17.6228 24.9858 16.7489V10.1591C24.9858 9.28528 24.652 8.44722 24.0577 7.82931C23.4635 7.2114 22.6576 6.86426 21.8172 6.86426H20.2329Z"
        fill="white"
      />
      <path
        d="M0 3.29488C0 2.42103 0.333829 1.58296 0.928049 0.965049C1.52227 0.347138 2.3282 0 3.16856 0H14.2585C15.0989 0 15.9048 0.347138 16.499 0.965049C17.0932 1.58296 17.4271 2.42103 17.4271 3.29488V9.88465C17.4271 10.7585 17.0932 11.5966 16.499 12.2145C15.9048 12.8324 15.0989 13.1795 14.2585 13.1795H11.09L6.33712 18.1219V13.1795H3.16856C2.3282 13.1795 1.52227 12.8324 0.928049 12.2145C0.333829 11.5966 0 10.7585 0 9.88465V3.29488Z"
        fill="white"
      />
    </svg>
  );
}

export default MessageIcon;
