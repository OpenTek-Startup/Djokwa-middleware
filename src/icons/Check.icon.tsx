import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function ChekIcon({
  width = 40,
  height = 40,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        d="M248.417 125.111V135.499C248.403 159.848 240.518 183.541 225.939 203.044C211.359 222.546 190.866 236.813 167.516 243.717C144.166 250.621 119.209 249.792 96.3686 241.354C73.5279 232.915 54.0269 217.319 40.7739 196.892C27.521 176.465 21.2261 152.302 22.8283 128.005C24.4304 103.708 33.8436 80.5799 49.6641 62.07C65.4845 43.5601 86.8645 30.6601 110.615 25.2939C134.366 19.9276 159.216 22.3828 181.457 32.293"
        stroke="black"
        strokeWidth="22.5833"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M248.416 45.167L135.5 158.197L101.625 124.322"
        stroke="black"
        strokeWidth="22.5833"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChekIcon;
