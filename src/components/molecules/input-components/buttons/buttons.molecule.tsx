import React from 'react';
import styles from './buttons.module.css';
// import { IconRepository } from '../../../../repository/icons/icon.repository';
import IconSprite from '../../../../repository/icons/IconSprite';
type Props = {
  label: string;
  height: number;
  icon?: React.ReactNode;
  color?: string;
  borderRadius?: number;
  bgcolor?: string;
  fontSize?: string;
  fontWeight?: number;
  onClick?: () => void;
  type: string;
};

const Buttons = (props: Props) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn_container}
        style={{
          height: props.height,
          borderRadius: props.borderRadius,
          backgroundColor: props.bgcolor,
          color: props.color,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
        }}
        onClick={props.onClick}
      >
        {props.label}
        <span className={styles.icon}>
          {/* <IconRepository.ChevrondownIcon color="white" /> */}
          <IconSprite
            name="chevron-down"
            stroke="white"
            width="25px"
            height="25px"
          />
        </span>
      </button>
    </div>
  );
};
export default Buttons;
