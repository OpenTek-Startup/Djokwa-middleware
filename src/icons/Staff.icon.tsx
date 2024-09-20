/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function StaffIcon({
  width = 30,
  height = 32,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 32"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M1.07471 29.9296H29.1747M16.881 26.5844V18.5558C16.881 18.5558 13.9539 16.5486 9.27054 16.5486C4.58721 16.5486 1.66012 18.5558 1.66012 18.5558V26.5844M21.5643 1.82959V5.84388H18.0518V9.85816H21.5643V13.8724H25.0768V9.85816H28.5893V5.84388H25.0768V1.82959H21.5643ZM8.97081 13.8724C8.97081 13.8724 5.75687 11.5335 5.75687 8.60838C5.75687 6.34566 7.33047 4.51113 9.27171 4.51113C11.213 4.51113 12.7784 6.34566 12.7784 8.60838C12.7784 11.5308 9.57496 13.8724 9.57496 13.8724H8.97081Z"
        stroke="white"
        stroke-width="2.34167"
      />
    </svg>
  );
}
export default StaffIcon;
