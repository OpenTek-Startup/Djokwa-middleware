import * as React from 'react';
import { IconPropsType } from '../types/input.type';

// general imports

function FolderIcon({
  width = 18,
  height = 17,
  color = 'currentColor',
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 17"
      strokeWidth={2}
      stroke={color}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.98688 0.34375C4.71076 0.34375 4.44596 0.453436 4.25071 0.648679C4.05547 0.843921 3.94578 1.10873 3.94578 1.38484V2.42593H2.90469C2.35246 2.42593 1.82285 2.64531 1.43237 3.03579C1.04188 3.42628 0.82251 3.95589 0.82251 4.50812V14.919C0.82251 15.4713 1.04188 16.0009 1.43237 16.3914C1.82285 16.7818 2.35246 17.0012 2.90469 17.0012H15.3978C15.95 17.0012 16.4796 16.7818 16.8701 16.3914C17.2606 16.0009 17.48 15.4713 17.48 14.919V4.50812C17.48 3.95589 17.2606 3.42628 16.8701 3.03579C16.4796 2.64531 15.95 2.42593 15.3978 2.42593H14.3567V1.38484C14.3567 1.10873 14.247 0.843921 14.0518 0.648679C13.8565 0.453436 13.5917 0.34375 13.3156 0.34375C13.0395 0.34375 12.7747 0.453436 12.5794 0.648679C12.3842 0.843921 12.2745 1.10873 12.2745 1.38484V2.42593H6.02797V1.38484C6.02797 1.10873 5.91828 0.843921 5.72304 0.648679C5.5278 0.453436 5.26299 0.34375 4.98688 0.34375ZM4.98688 5.54921C4.71076 5.54921 4.44596 5.65889 4.25071 5.85414C4.05547 6.04938 3.94578 6.31419 3.94578 6.5903C3.94578 6.86641 4.05547 7.13122 4.25071 7.32646C4.44596 7.52171 4.71076 7.63139 4.98688 7.63139H13.3156C13.5917 7.63139 13.8565 7.52171 14.0518 7.32646C14.247 7.13122 14.3567 6.86641 14.3567 6.5903C14.3567 6.31419 14.247 6.04938 14.0518 5.85414C13.8565 5.65889 13.5917 5.54921 13.3156 5.54921H4.98688Z"
        fill="#FC7717"
      />
    </svg>
  );
}

export default FolderIcon;
