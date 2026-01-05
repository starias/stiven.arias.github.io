import { useState, useEffect, useRef } from 'react';

export default function useImageSlider(images, interval = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);
  };

  useEffect(() => {
    if (!images || images.length === 0) return;

    startTimer();

    return () => clearInterval(timerRef.current);

  }, [images, interval]);

  const setIndex = (index) => {
    setCurrentIndex(index);
    startTimer();
  };

  return { currentIndex, setCurrentIndex: setIndex };
}