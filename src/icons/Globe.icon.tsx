import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function GlobeIcon({
  width = 29,
  height = 29,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 29 29"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M14.7468 26.1001C21.1775 26.1001 26.3906 20.887 26.3906 14.4563C26.3906 8.0256 21.1775 2.8125 14.7468 2.8125C8.31613 2.8125 3.10303 8.0256 3.10303 14.4563C3.10303 20.887 8.31613 26.1001 14.7468 26.1001Z"
        stroke="#0094FF"
        strokeWidth="1.99608"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.10303 14.4568H26.3906"
        stroke="#0094FF"
        strokeWidth="1.99608"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7464 2.8125C17.6588 6.00098 19.314 10.1388 19.4039 14.4563C19.314 18.7738 17.6588 22.9116 14.7464 26.1001C11.8339 22.9116 10.1788 18.7738 10.0889 14.4563C10.1788 10.1388 11.8339 6.00098 14.7464 2.8125Z"
        stroke="#0094FF"
        strokeWidth="1.99608"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GlobeIcon;
