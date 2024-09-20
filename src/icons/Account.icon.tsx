import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function AccountUserIcon({
  width = 24,
  height = 25,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="icon icon-tabler icon-tabler-arrow-big-left"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AccountUserIcon;
