import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function TimerIcon({
  width = 20,
  height = 20,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M10.1512 5.95618V9.65783L12.9275 12.4341M18.48 9.65783C18.48 10.7516 18.2645 11.8346 17.846 12.8451C17.4274 13.8556 16.8139 14.7737 16.0405 15.5471C15.2672 16.3205 14.349 16.934 13.3385 17.3526C12.328 17.7711 11.245 17.9866 10.1512 17.9866C9.0575 17.9866 7.97446 17.7711 6.96397 17.3526C5.95349 16.934 5.03533 16.3205 4.26194 15.5471C3.48854 14.7737 2.87505 13.8556 2.4565 12.8451C2.03794 11.8346 1.82251 10.7516 1.82251 9.65783C1.82251 7.44892 2.7 5.33047 4.26194 3.76853C5.82388 2.20659 7.94233 1.3291 10.1512 1.3291C12.3602 1.3291 14.4786 2.20659 16.0405 3.76853C17.6025 5.33047 18.48 7.44892 18.48 9.65783Z"
        stroke="#FC7717"
        strokeWidth="2.08218"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TimerIcon;
