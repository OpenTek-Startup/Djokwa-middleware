import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function OpeneyeIcon({
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
      <g clipPath="url(#clip0_1705_4880)">
        <path
          d="M18.3741 18.8691C16.668 20.1696 14.5906 20.89 12.4457 20.9251C5.45944 20.9251 1.46729 12.9408 1.46729 12.9408C2.70874 10.6272 4.4306 8.60588 6.51736 7.01241M10.3498 5.19598C11.0368 5.03517 11.7402 4.95479 12.4457 4.95645C19.432 4.95645 23.4241 12.9408 23.4241 12.9408C22.8183 14.0741 22.0958 15.1412 21.2684 16.1245M14.5616 15.0566C14.2875 15.3508 13.9569 15.5867 13.5896 15.7504C13.2223 15.914 12.8259 16.002 12.4239 16.0091C12.0218 16.0162 11.6225 15.9422 11.2497 15.7916C10.8769 15.6411 10.5382 15.4169 10.2539 15.1326C9.96955 14.8483 9.74541 14.5096 9.59483 14.1368C9.44424 13.764 9.37029 13.3646 9.37738 12.9626C9.38447 12.5606 9.47247 12.1641 9.63611 11.7969C9.79976 11.4296 10.0357 11.099 10.3299 10.8249"
          stroke="black"
          strokeWidth="1.99608"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.46729 1.9624L23.4241 23.9193"
          stroke="black"
          strokeWidth="1.99608"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1705_4880">
          <rect
            width="23.9529"
            height="23.9529"
            fill="white"
            transform="translate(0.468506 0.963013)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default OpeneyeIcon;
