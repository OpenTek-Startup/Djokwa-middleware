import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function BookopenIcon({
  width = 25,
  height = 31,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 31"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <g clipPath="url(#clip0_1665_722)">
        <path
          d="M2.35986 3.07959H8.35986C9.42073 3.07959 10.4381 3.65522 11.1883 4.67986C11.9384 5.7045 12.3599 7.0942 12.3599 8.54325V27.6661C12.3599 26.5793 12.0438 25.537 11.4812 24.7685C10.9186 24.0001 10.1555 23.5683 9.35986 23.5683H2.35986V3.07959Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.3599 3.07959H16.3599C15.299 3.07959 14.2816 3.65522 13.5314 4.67986C12.7813 5.7045 12.3599 7.0942 12.3599 8.54325V27.6661C12.3599 26.5793 12.6759 25.537 13.2385 24.7685C13.8012 24.0001 14.5642 23.5683 15.3599 23.5683H22.3599V3.07959Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1665_722">
          <rect
            width="24"
            height="32.782"
            fill="white"
            transform="translate(0.359863 -1.01807)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BookopenIcon;
