/* eslint-disable quotes */
import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function CommentIcon({
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
      <path
        d="M21.25 11.4908C21.2534 12.8106 20.9451 14.1126 20.35 15.2908C19.6444 16.7025 18.5598 17.8899 17.2174 18.72C15.8751 19.5501 14.3282 19.9901 12.75 19.9908C11.4301 19.9942 10.1281 19.6858 8.95 19.0908L3.25 20.9908L5.15 15.2908C4.55493 14.1126 4.24656 12.8106 4.25 11.4908C4.25061 9.91251 4.69061 8.3656 5.52072 7.0233C6.35083 5.681 7.53825 4.59632 8.95 3.89075C10.1281 3.29568 11.4301 2.98731 12.75 2.99075H13.25C15.3343 3.10574 17.303 3.98551 18.7791 5.46161C20.2552 6.93771 21.135 8.9064 21.25 10.9908V11.4908Z"
        stroke="#142E6E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CommentIcon;

<svg
  width="25"
  height="24"
  viewBox="0 0 25 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
></svg>;
