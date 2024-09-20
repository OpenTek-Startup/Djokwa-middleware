import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function EditeIcon({
  width = 25,
  height = 25,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 25"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M12.0156 20.4336H21.0156"
        stroke="black"
        strokeWidth="1.41406"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5156 3.93382C16.9134 3.536 17.453 3.3125 18.0156 3.3125C18.2942 3.3125 18.57 3.36737 18.8274 3.47398C19.0848 3.58058 19.3186 3.73684 19.5156 3.93382C19.7126 4.1308 19.8689 4.36466 19.9755 4.62203C20.0821 4.8794 20.1369 5.15524 20.1369 5.43382C20.1369 5.7124 20.0821 5.98824 19.9755 6.24561C19.8689 6.50298 19.7126 6.73684 19.5156 6.93382L7.01562 19.4338L3.01562 20.4338L4.01562 16.4338L16.5156 3.93382Z"
        stroke="black"
        strokeWidth="1.41406"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditeIcon;
