import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function UserIcon({
  width = 27,
  height = 27,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 27"
      strokeWidth={2}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M1.97845 22.3125C1.97845 20.7243 2.60975 19.2011 3.73345 18.0781C4.85716 16.9551 6.38124 16.3242 7.9704 16.3242H19.9543C21.5435 16.3242 23.0675 16.9551 24.1912 18.0781C25.3149 19.2011 25.9462 20.7243 25.9462 22.3125C25.9462 23.1065 25.6306 23.8681 25.0687 24.4296C24.5069 24.9911 23.7448 25.3066 22.9503 25.3066H4.97443C4.17985 25.3066 3.41781 24.9911 2.85595 24.4296C2.2941 23.8681 1.97845 23.1065 1.97845 22.3125Z"
        stroke="black"
        strokeWidth="1.99608"
        strokeLinejoin="round"
      />
      <path
        d="M13.9622 10.3398C16.4441 10.3398 18.4561 8.32901 18.4561 5.8486C18.4561 3.36819 16.4441 1.35742 13.9622 1.35742C11.4802 1.35742 9.4682 3.36819 9.4682 5.8486C9.4682 8.32901 11.4802 10.3398 13.9622 10.3398Z"
        stroke="black"
        strokeWidth="1.99608"
      />
    </svg>
  );
}

export default UserIcon;
