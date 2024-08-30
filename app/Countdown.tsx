'use client';

import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Image from 'next/image';
import styles from './Countdown.module.css';

interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const SpaceMarinesCountdown = () => {
  const [isComplete, setIsComplete] = useState(false);
  const preReleaseDate = new Date('2023-09-05T12:00:00-04:00').getTime();

  useEffect(() => {
    if (Date.now() >= preReleaseDate) {
      setIsComplete(true);
    }
  }, [preReleaseDate]);

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRendererProps) => {
    if (completed) {
      return <span className={styles.completedText}>Early Access Released - For the Emperor.</span>;
    } else {
      return (
        <div className={styles.countdownDisplay}>
          <span>{days}d</span> : <span>{hours}h</span> : <span>{minutes}m</span> : <span>{seconds}s</span>
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.vignette}></div>
      <Image
        src="/ar23ix.jpg"
        alt="Space Marines 2 Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className={styles.backgroundImage}
      />
      <main className={styles.content}>
        <h1 className={styles.title}>Space Marines 2</h1>
        <div className={styles.countdownContainer}>
          <h2 className={styles.subtitle}>
            {isComplete ? "Early Access Available Now!" : "Time until pre-release:"}
          </h2>
          <Countdown date={preReleaseDate} renderer={renderer} onComplete={() => setIsComplete(true)} />
        </div>
      </main>
    </div>
  );
};

export default SpaceMarinesCountdown;