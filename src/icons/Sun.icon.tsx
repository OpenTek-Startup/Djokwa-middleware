import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function SunIcon({
  width = 28,
  height = 28,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M26.8968 15.5317C26.678 17.8996 25.7894 20.1562 24.3348 22.0374C22.8803 23.9187 20.9201 25.3468 18.6835 26.1547C16.447 26.9625 14.0266 27.1167 11.7056 26.5992C9.38465 26.0817 7.25906 24.9138 5.57757 23.2324C3.89608 21.5509 2.72825 19.4253 2.21073 17.1043C1.69321 14.7833 1.84739 12.3629 2.65525 10.1264C3.46311 7.88984 4.89122 5.92962 6.77248 4.4751C8.65375 3.02057 10.9103 2.13191 13.2782 1.91309C11.8919 3.78862 11.2248 6.09945 11.3982 8.42528C11.5717 10.7511 12.5742 12.9374 14.2233 14.5866C15.8725 16.2358 18.0588 17.2382 20.3847 17.4117C22.7105 17.5851 25.0213 16.918 26.8968 15.5317Z"
        stroke="black"
        strokeWidth="2.08218"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SunIcon;
