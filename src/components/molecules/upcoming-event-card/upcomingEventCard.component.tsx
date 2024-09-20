import React from 'react';
import styles from './upcomingEventCard.module.css';
import { EventType } from '../../../types/UpcomingEventCard.type';
// import { colorsVariant } from '../../../constants/demoData';
// import { IconRepository } from '../../../repository/icons/icon.repository';
import Buttons from '../input-components/buttons/buttons.molecule';
import IconSprite from '../../../repository/icons/IconSprite';

const DisplayEventCard = ({
  status,
  TimePeriod,
  title,
  subtitle,
  datePeriod,
  borderColor,
}: EventType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.content}
          style={{ borderLeftColor: borderColor }}
        >
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
          <span className={styles.details}>
            <div className={styles.icon}>
              {/* <IconRepository.TimerIcon /> */}
              <IconSprite
                color="none"
                name="clock"
                stroke="orange"
                width="20px"
                height="20px"
              />
            </div>
            <div className={styles.date}>{datePeriod}</div>
          </span>
          <span className={styles.details}>
            <div className={styles.icon}>
              {/* <IconRepository.CalenderIcon /> */}
              <IconSprite
                color="none"
                name="date"
                stroke="orange"
                width="20px"
                height="20px"
              />
            </div>
            <div className={styles.date}>{TimePeriod}</div>
          </span>
          <div className={styles.ViewMore}>
            <Buttons
              height={25}
              type=""
              label="View details"
              bgcolor="#6b56f6"
              color="#fff"
              icon={''}
              onClick={() => alert('Hi buddy')}
              borderRadius={5}
              fontSize="0.9rem"
            />
          </div>
        </div>
        <span className={styles.action}>
          <span className={styles.action_content}>
            <i className={styles.icon1}>
              <IconSprite
                color="blue"
                name="check-circle"
                stroke="green"
                width="30px"
                height="30px"
              />
            </i>
            <p>{status}</p>
          </span>
          <span className={styles.action_content}>
            <i className={styles.icon1}>
              <IconSprite
                color="blue"
                name="wrong"
                stroke="red"
                width="30px"
                height="30px"
              />
            </i>
            <p>Terminate</p>
          </span>
        </span>
      </div>
    </div>
  );
};
export default DisplayEventCard;
