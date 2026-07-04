import React, { useState, useEffect } from 'react';
import loadingSvg from '../assets/loading.svg';
import './Loader.css';

const loadingMessages = [
  "Booting up the mainframe...",
  "Bribing the server with coffee...",
  "Downloading extra RAM...",
  "Polishing the UI pixels...",
  "Access granted… I’m watching you 👀"
];

const Loader = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Message rotation interval
    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 700);
    
    // Progress bar interval (goes from 0 to 100 over 3.5 seconds)
    const duration = 3500;
    const updateRate = 30; // update every 30ms
    const totalSteps = duration / updateRate;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(100, Math.floor((currentStep / totalSteps) * 100));
      setProgress(newProgress);
      
      if (currentStep >= totalSteps) {
        clearInterval(progressInterval);
      }
    }, updateRate);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src={loadingSvg} alt="Loading Animation" className="loading-svg-img" />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div className="loading-bar-container">
            <div 
              className="loading-bar" 
              style={{ width: `${progress}%`, animation: 'none', transition: 'width 0.1s linear' }}
            ></div>
          </div>
          <div style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '2px', fontSize: '1rem' }}>
            {progress}%
          </div>
        </div>
        
        <h2 className="loading-text dynamic-text">
          {loadingMessages[messageIndex]}
        </h2>
      </div>
    </div>
  );
};

export default Loader;
