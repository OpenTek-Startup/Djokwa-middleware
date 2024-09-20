import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function AccountDoorIcon({
  width = 40,
  height = 41,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="icon icon-tabler icon-tabler-arrow-big-left"
      width={width}
      height={height}
      viewBox="0 0 40 41"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <rect
        x="1"
        y="1.5"
        width="38"
        height="38"
        rx="6"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M26 23.5H24V25.5H26M26 19.5H24V21.5H26M28 27.5H20V25.5H22V23.5H20V21.5H22V19.5H20V17.5H28M18 15.5H16V13.5H18M18 19.5H16V17.5H18M18 23.5H16V21.5H18M18 27.5H16V25.5H18M14 15.5H12V13.5H14M14 19.5H12V17.5H14M14 23.5H12V21.5H14M14 27.5H12V25.5H14M20 15.5V11.5H10V29.5H30V15.5H20Z"
        fill="black"
      />
    </svg>
  );
}

export default AccountDoorIcon;
