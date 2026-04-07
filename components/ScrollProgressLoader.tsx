import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ScrollProgressLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loaderElement = (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
        zIndex: 99999,
        backgroundColor: 'transparent',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(to right, #FFD670, #D0E9BC, #BDE7F0)',
          transition: 'width 0.3s ease-out',
          boxShadow: '0 0 10px rgba(250, 211, 124, 0.71)',
        }}
      />
    </div>
  );

  return createPortal(loaderElement, document.body);
};

export default ScrollProgressLoader;
