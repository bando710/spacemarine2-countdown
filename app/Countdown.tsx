'use client';

import React, { useState } from 'react';
import Countdown from 'react-countdown';

interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const SpaceMarinesCountdown = () => {
  const [isComplete, setIsComplete] = useState(false);

  // Calculate the pre-release date (New York, 12:00 PM on September 5th)
  const preReleaseDate = new Date('2024-09-05T12:00:00-04:00').getTime(); // EDT timezone

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRendererProps) => {
    if (completed) {
      setIsComplete(true);
      return <span className="text-2xl font-bold">Early Access Released - For the Emperor.</span>;
    } else {
      return (
        <div className="text-4xl font-bold">
          <span>{days} days</span> : <span>{hours} hours</span> :{' '}
          <span>{minutes} minutes</span> : <span>{seconds} seconds</span>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/ar23ix.jpg')"}}>
      <main className="text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Space Marines 2</h1>
        <div className="bg-black bg-opacity-70 p-8 rounded-lg">
          <h2 className="text-2xl text-white mb-4">
            {isComplete ? "Early Access Available Now!" : "Time until pre-release:"}
          </h2>
          <Countdown date={preReleaseDate} renderer={renderer} />
        </div>
      </main>
    </div>
  );
};

export default SpaceMarinesCountdown;