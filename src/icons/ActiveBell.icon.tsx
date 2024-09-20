/* eslint-disable tailwindcss/no-custom-classname */
import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function ActiveBellIcon({
  width = 26,
  height = 29,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-big-left"
      width={width}
      height={height}
      viewBox="0 0 26 71"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M12.8908 3.10254C10.0507 3.10254 7.32688 4.08971 5.31861 5.8469C3.31034 7.60408 2.18211 9.98733 2.18211 12.4724V18.0724L0.920266 19.1765C0.670737 19.3949 0.500814 19.6731 0.431979 19.976C0.363144 20.2789 0.398489 20.5928 0.533543 20.8781C0.668598 21.1634 0.897299 21.4073 1.19073 21.5789C1.48417 21.7505 1.82917 21.8421 2.18211 21.8422H23.5995C23.9524 21.8421 24.2974 21.7505 24.5909 21.5789C24.8843 21.4073 25.113 21.1634 25.2481 20.8781C25.3831 20.5928 25.4185 20.2789 25.3496 19.976C25.2808 19.6731 25.1109 19.3949 24.8613 19.1765L23.5995 18.0724V12.4724C23.5995 9.98733 22.4713 7.60408 20.463 5.8469C18.4547 4.08971 15.7309 3.10254 12.8908 3.10254ZM12.8908 28.0887C11.4707 28.0887 10.1088 27.5952 9.10471 26.7166C8.10057 25.838 7.53646 24.6463 7.53646 23.4038H18.2452C18.2452 24.6463 17.681 25.838 16.6769 26.7166C15.6728 27.5952 14.3109 28.0887 12.8908 28.0887Z"
        fill="black"
      />
      <circle cx="21" cy="5" r="5" fill="#7FF102" />
    </svg>
  );
}

export default ActiveBellIcon;
