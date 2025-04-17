import React, { useState, useEffect } from 'react';

const Countdown = () => {
  // Set the target date and time (72 hours from now)
  const targetDate = new Date('2025-04-21T00:00:52+02:00'); // Adjusted for CAT timezone (+02:00)

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        message: 'Website is now live!',
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, message: '' };
  }

  const { days, hours, minutes, seconds, message } = timeLeft;

  return (
    <div style={styles.countdownContainer}>
      <h1 style={styles.title}>
        <span style={styles.goldText}>Copperbelt Chess Academy</span>
      </h1>
      <h2 style={styles.subtitle}>Website Coming Soon</h2>
      {message ? (
        <p style={styles.message}>{message}</p>
      ) : (
        <div style={styles.timerContainer}>
          <div style={styles.timeUnit}>
            <span style={styles.timeValue}>{days}</span>
            <span style={styles.timeLabel}>Days</span>
          </div>
          <div style={styles.separator}>:</div>
          <div style={styles.timeUnit}>
            <span style={styles.timeValue}>{hours}</span>
            <span style={styles.timeLabel}>Hours</span>
          </div>
          <div style={styles.separator}>:</div>
          <div style={styles.timeUnit}>
            <span style={styles.timeValue}>{minutes}</span>
            <span style={styles.timeLabel}>Minutes</span>
          </div>
          <div style={styles.separator}>:</div>
          <div style={styles.timeUnit}>
            <span style={styles.timeValue}>{seconds}</span>
            <span style={styles.timeLabel}>Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Home = () => (
  <div style={styles.container}>
    <Countdown />
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f8f8f8', // Light background
  },
  countdownContainer: {
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  goldText: {
    color: '#FFD700', // Gold color
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '2rem',
  },
  timerContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeUnit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timeValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  timeLabel: {
    fontSize: '0.9rem',
    color: '#777',
  },
  separator: {
    fontSize: '2rem',
    color: '#333',
  },
  message: {
    fontSize: '1.2rem',
    color: 'green',
    marginTop: '1rem',
  },
};

export default Home;