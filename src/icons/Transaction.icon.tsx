import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function TransactionIcon({
  width = 29,
  height = 24,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 29 24"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M3.66916 5.64321C4.58913 5.64321 5.33491 4.79573 5.33491 3.75032C5.33491 2.7049 4.58913 1.85742 3.66916 1.85742C2.7492 1.85742 2.00342 2.7049 2.00342 3.75032C2.00342 4.79573 2.7492 5.64321 3.66916 5.64321Z"
        stroke="white"
        strokeWidth="2.08218"
      />
      <path
        d="M8.66724 1.85742H26.9905M8.66724 5.64321H18.6617"
        stroke="white"
        strokeWidth="2.08218"
        strokeLinecap="round"
      />
      <path
        d="M3.66916 14.1657C4.58913 14.1657 5.33491 13.3182 5.33491 12.2728C5.33491 11.2274 4.58913 10.3799 3.66916 10.3799C2.7492 10.3799 2.00342 11.2274 2.00342 12.2728C2.00342 13.3182 2.7492 14.1657 3.66916 14.1657Z"
        stroke="white"
        strokeWidth="2.08218"
      />
      <path
        d="M8.66724 10.3799H21.9932M8.66724 14.1657H20.3275"
        stroke="white"
        strokeWidth="2.08218"
        strokeLinecap="round"
      />
      <path
        d="M3.66916 22.6803C4.58913 22.6803 5.33491 21.8328 5.33491 20.7874C5.33491 19.742 4.58913 18.8945 3.66916 18.8945C2.7492 18.8945 2.00342 19.742 2.00342 20.7874C2.00342 21.8328 2.7492 22.6803 3.66916 22.6803Z"
        stroke="white"
        strokeWidth="2.08218"
      />
      <path
        d="M8.66724 18.8945H24.4918M8.66724 22.6803H15.3302"
        stroke="white"
        strokeWidth="2.08218"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default TransactionIcon;
