/* eslint-disable tailwindcss/no-custom-classname */
import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function AddstudenIcon({
  width = 38,
  height = 38,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-big-left"
      width={width}
      height={height}
      viewBox="0 0 38 38"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M14.9591 15.5886C14.0194 15.2882 13.122 15.0321 12.2668 14.8204C11.9143 13.5965 11.7364 12.3202 11.7394 11.0366C11.7394 5.4365 15.0198 0.896484 19.0665 0.896484C23.1132 0.896484 26.3905 5.43224 26.3905 11.0332C26.3929 12.2565 26.2314 13.4736 25.9113 14.6454C24.8471 14.8901 23.7134 15.2045 22.5103 15.5886C20.7989 16.1366 19.415 16.6794 18.7328 16.9585C18.0544 16.6794 16.6705 16.1366 14.9591 15.5886ZM5.00579 22.8386C4.15709 22.8386 3.32745 23.1148 2.62179 23.6322C1.91613 24.1495 1.36615 24.8849 1.0414 25.7453C0.716651 26.6056 0.631722 27.5523 0.797352 28.4656C0.962982 29.379 1.37173 30.2179 1.97191 30.8763C2.57209 31.5347 3.33673 31.983 4.16914 32.1646C5.00156 32.3462 5.86435 32.2528 6.6484 31.8963C7.43245 31.5399 8.10255 30.9363 8.57395 30.1619C9.04535 29.3875 9.29688 28.4772 9.29673 27.5459C9.29652 26.2974 8.84435 25.1001 8.03967 24.2173C7.23498 23.3346 6.14368 22.8386 5.00579 22.8386ZM32.9941 22.8386C32.1454 22.8386 31.3158 23.1148 30.6102 23.6322C29.9045 24.1495 29.3545 24.8849 29.0298 25.7453C28.705 26.6056 28.6201 27.5523 28.7857 28.4656C28.9513 29.379 29.3601 30.2179 29.9603 30.8763C30.5604 31.5347 31.3251 31.983 32.1575 32.1646C32.9899 32.3462 33.8527 32.2528 34.6368 31.8963C35.4208 31.5399 36.0909 30.9363 36.5623 30.1619C37.0337 29.3875 37.2852 28.4772 37.2851 27.5459C37.2849 26.2976 36.8328 25.1004 36.0283 24.2176C35.2238 23.3349 34.1327 22.8389 32.9949 22.8386H32.9941ZM27.4593 27.5459C27.4605 26.3716 27.7716 25.2228 28.355 24.2383C28.9383 23.2537 29.7691 22.4756 30.7468 21.9979V15.3786C25.73 15.3786 18.7328 18.4207 18.7328 18.4207C18.7328 18.4207 11.7355 15.3786 6.71874 15.3786V21.7734C7.82918 22.1704 8.79668 22.9427 9.48276 23.9797C10.1688 25.0167 10.5383 26.2653 10.5383 27.5468C10.5383 28.8283 10.1688 30.0769 9.48276 31.1139C8.79668 32.1509 7.82918 32.9232 6.71874 33.3202V33.9177C11.7355 33.9177 18.7328 37.4667 18.7328 37.4667C18.7328 37.4667 25.7332 33.9202 30.7468 33.9202V33.094C29.7691 32.6163 28.9383 31.8382 28.355 30.8536C27.7716 29.8691 27.4605 28.7203 27.4593 27.5459Z"
        fill="black"
      />
    </svg>
  );
}

export default AddstudenIcon;
