import React, { useState, useEffect } from 'react';
import type { TerminalTypingProps } from '../../types';

const TerminalTyping: React.FC<TerminalTypingProps> = ({ 
  text, 
  speed = 50, 
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return <span>{displayText}<span className="cursor-blink">_</span></span>;
};

export default TerminalTyping;
