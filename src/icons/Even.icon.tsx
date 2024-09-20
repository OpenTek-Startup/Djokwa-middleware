import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function EvenIcon({
  width = 27,
  height = 22,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 22"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.60762 0C6.16951 0 5.74934 0.1396 5.43955 0.388091C5.12976 0.636581 4.95572 0.973607 4.95572 1.32503V2.65005H3.30381C2.42759 2.65005 1.58725 2.92925 0.967664 3.42623C0.348079 3.92321 0 4.59727 0 5.3001V18.5504C0 19.2532 0.348079 19.9272 0.967664 20.4242C1.58725 20.9212 2.42759 21.2004 3.30381 21.2004H23.1267C24.0029 21.2004 24.8432 20.9212 25.4628 20.4242C26.0824 19.9272 26.4305 19.2532 26.4305 18.5504V5.3001C26.4305 4.59727 26.0824 3.92321 25.4628 3.42623C24.8432 2.92925 24.0029 2.65005 23.1267 2.65005H21.4748V1.32503C21.4748 0.973607 21.3007 0.636581 20.9909 0.388091C20.6811 0.1396 20.261 0 19.8229 0C19.3848 0 18.9646 0.1396 18.6548 0.388091C18.345 0.636581 18.171 0.973607 18.171 1.32503V2.65005H8.25953V1.32503C8.25953 0.973607 8.08549 0.636581 7.7757 0.388091C7.4659 0.1396 7.04574 0 6.60762 0ZM6.60762 6.62513C6.16951 6.62513 5.74934 6.76473 5.43955 7.01322C5.12976 7.26171 4.95572 7.59874 4.95572 7.95015C4.95572 8.30157 5.12976 8.6386 5.43955 8.88709C5.74934 9.13558 6.16951 9.27518 6.60762 9.27518H19.8229C20.261 9.27518 20.6811 9.13558 20.9909 8.88709C21.3007 8.6386 21.4748 8.30157 21.4748 7.95015C21.4748 7.59874 21.3007 7.26171 20.9909 7.01322C20.6811 6.76473 20.261 6.62513 19.8229 6.62513H6.60762Z"
        fill="white"
      />
    </svg>
  );
}

export default EvenIcon;
