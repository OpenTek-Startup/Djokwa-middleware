import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function UserDetailIcon({
  width = 32,
  height = 28,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 28"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M24.75 4H19.525C19 2.55 17.625 1.5 16 1.5C14.375 1.5 13 2.55 12.475 4H7.25C5.875 4 4.75 5.125 4.75 6.5V24C4.75 25.375 5.875 26.5 7.25 26.5H24.75C26.125 26.5 27.25 25.375 27.25 24V6.5C27.25 5.125 26.125 4 24.75 4ZM16 3.6875C16.5125 3.6875 16.9375 4.1125 16.9375 4.625C16.9375 5.1375 16.5125 5.5625 16 5.5625C15.4875 5.5625 15.0625 5.1375 15.0625 4.625C15.0625 4.1125 15.4875 3.6875 16 3.6875ZM24.75 24H7.25V6.5H24.75V24Z"
        fill="#D27C2C"
      />
      <path
        d="M19.9148 12.9087L17.2207 10.5237L9.64648 17.2175V19.625H12.3152L19.9148 12.9087ZM22.1642 10.9288C22.4184 10.7038 22.4184 10.355 22.1642 10.13L20.3723 8.54375C20.1181 8.31875 19.7242 8.31875 19.47 8.54375L18.1229 9.73625L20.8171 12.1212L22.1642 10.9288Z"
        fill="#D27C2C"
      />
    </svg>
  );
}

export default UserDetailIcon;
