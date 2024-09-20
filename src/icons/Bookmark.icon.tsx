import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function BookmarkIcon({
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
        d="M19.5 21.5L12.5 16.5L5.5 21.5V5.5C5.5 4.96957 5.71071 4.46086 6.08579 4.08579C6.46086 3.71071 6.96957 3.5 7.5 3.5H17.5C18.0304 3.5 18.5391 3.71071 18.9142 4.08579C19.2893 4.46086 19.5 4.96957 19.5 5.5V21.5Z"
        stroke="#142E6E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BookmarkIcon;
