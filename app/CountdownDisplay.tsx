import React from 'react';
import styles from './Countdown.module.css';

interface CountdownDisplayProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ days, hours, minutes, seconds }) => (
  <div className={styles.countdownDisplay}>
    <div className={styles.timeUnit}>
      <span className={styles.number}>{days}</span>
      <span className={styles.label}>Days</span>
    </div>
    <div className={styles.timeUnit}>
      <span className={styles.number}>{hours}</span>
      <span className={styles.label}>Hours</span>
    </div>
    <div className={styles.timeUnit}>
      <span className={styles.number}>{minutes}</span>
      <span className={styles.label}>Minutes</span>
    </div>
    <div className={styles.timeUnit}>
      <span className={styles.number}>{seconds}</span>
      <span className={styles.label}>Seconds</span>
    </div>
  </div>
);

export default CountdownDisplay;