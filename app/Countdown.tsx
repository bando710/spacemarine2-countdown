'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Countdown.module.css';

const SpaceMarinesCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isComplete, setIsComplete] = useState(false);
  
  // Set the exact release date and time (September 5th, 2024, at 12:00 PM New York time)
  const releaseDate = new Date('2024-09-05T12:00:00-04:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsComplete(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  return (
    <div className={styles.container}>
      <div className={styles.vignette}></div>
      <Image
        src="/ar23ix.jpg"
        alt="Space Marine 2 Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className={styles.backgroundImage}
      />
      <main className={styles.content}>
        <h1 className={styles.title}>Space Marine 2</h1>
        <div className={styles.countdownContainer}>
          <h2 className={styles.subtitle}>
            {isComplete ? "Early Unlock Available Now!" : "PC Early Unlock In:"}
          </h2>
          {!isComplete && (
            <div className={styles.countdownDisplay}>
              <div className={styles.timeUnit}>
                <span className={styles.number}>{timeLeft.days}</span>
                <span className={styles.label}>Days</span>
              </div>
              <div className={styles.timeUnit}>
                <span className={styles.number}>{timeLeft.hours}</span>
                <span className={styles.label}>Hours</span>
              </div>
              <div className={styles.timeUnit}>
                <span className={styles.number}>{timeLeft.minutes}</span>
                <span className={styles.label}>Minutes</span>
              </div>
              <div className={styles.timeUnit}>
                <span className={styles.number}>{timeLeft.seconds}</span>
                <span className={styles.label}>Seconds</span>
              </div>
            </div>
          )}
          {isComplete && <span className={styles.completedText}>For the Emperor! The Crusade Begins!</span>}
        </div>
      </main>
    </div>
  );
};

export default SpaceMarinesCountdown;