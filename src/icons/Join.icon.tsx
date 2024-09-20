import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function JoinIcon({
  width = 34,
  height = 35,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 34 35"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M33 16.5016L17.8711 30.77C16.0177 32.518 13.504 33.5 10.8829 33.5C8.26178 33.5 5.74803 32.518 3.89463 30.77C2.04123 29.022 1 26.6512 1 24.1792C1 21.7072 2.04123 19.3364 3.89463 17.5884L19.0235 3.32C20.2591 2.15467 21.9349 1.5 23.6823 1.5C25.4297 1.5 27.1056 2.15467 28.3412 3.32C29.5768 4.48532 30.2709 6.06584 30.2709 7.71386C30.2709 9.36188 29.5768 10.9424 28.3412 12.1077L13.1958 26.3761C12.578 26.9588 11.7401 27.2861 10.8664 27.2861C9.99272 27.2861 9.1548 26.9588 8.537 26.3761C7.9192 25.7935 7.57212 25.0032 7.57212 24.1792C7.57212 23.3552 7.9192 22.5649 8.537 21.9823L22.5135 8.81621"
        stroke="#2662F0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default JoinIcon;
