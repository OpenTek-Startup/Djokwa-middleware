import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function FileIcon({
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
        d="M14.457 2.93359H6.45703C5.9266 2.93359 5.41789 3.14431 5.04282 3.51938C4.66774 3.89445 4.45703 4.40316 4.45703 4.93359V20.9336C4.45703 21.464 4.66774 21.9727 5.04282 22.3478C5.41789 22.7229 5.9266 22.9336 6.45703 22.9336H18.457C18.9875 22.9336 19.4962 22.7229 19.8712 22.3478C20.2463 21.9727 20.457 21.464 20.457 20.9336V8.93359L14.457 2.93359Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.457 2.93359V8.93359H20.457"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.457 13.9336H8.45703"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.457 17.9336H8.45703"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.457 9.93359H9.45703H8.45703"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FileIcon;
