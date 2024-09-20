import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function ArrobaseIcon({
  width = 23,
  height = 23,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 23 23"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M12.1503 16.7177C14.3727 16.7177 16.1743 14.9268 16.1743 12.7177C16.1743 10.5085 14.3727 8.71765 12.1503 8.71765C9.92785 8.71765 8.12622 10.5085 8.12622 12.7177C8.12622 14.9268 9.92785 16.7177 12.1503 16.7177Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1743 8.71764V13.7176C16.1743 14.5133 16.4923 15.2764 17.0583 15.839C17.6243 16.4016 18.3919 16.7176 19.1924 16.7176C19.9928 16.7176 20.7604 16.4016 21.3264 15.839C21.8924 15.2764 22.2104 14.5133 22.2104 13.7176V12.7176C22.2103 10.4607 21.442 8.27012 20.0306 6.50217C18.6192 4.73423 16.6477 3.49287 14.4366 2.97994C12.2254 2.46701 9.90476 2.71268 7.8519 3.67701C5.79904 4.64133 4.13472 6.2676 3.12957 8.29136C2.12442 10.3151 1.83755 12.6174 2.31561 14.8238C2.79367 17.0301 4.00854 19.0109 5.76269 20.4439C7.51683 21.8769 9.70707 22.678 11.9773 22.7168C14.2475 22.7556 16.4642 22.0299 18.2668 20.6576"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrobaseIcon;

<svg
  width="25"
  height="25"
  viewBox="0 0 25 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
></svg>;
