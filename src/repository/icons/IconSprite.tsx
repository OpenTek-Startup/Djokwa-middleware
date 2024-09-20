import React from 'react';
import sprite from '../../icons/sprite.svg';

interface IconSpriteProps {
  name: string;
  color?: string;
  className?: string;
  width?: string;
  height?: string;
  stroke?: string;
}

const IconSprite: React.FC<IconSpriteProps> = ({
  color,
  name,
  className,
  width = '40px',
  height = '40px',
  stroke = 'black',
}) => {
  return (
    <svg
      className={className}
      fill={color}
      width={width}
      height={height}
      stroke={stroke}
    >
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default IconSprite;
