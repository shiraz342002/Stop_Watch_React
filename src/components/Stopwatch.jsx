import React, { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalIdRef.current);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    console.log(elapsedTime);
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const pad = (num) => (num < 10 ? '0' : '') + num;

    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  }

  return (
    <div className='stopwatch'>
      <div className="display">{formatTime()}</div>
      <div className="button-container">
        <button className='start' onClick={start}>Start</button>
        <button className='stop' onClick={stop}>Stop</button>
        <button className='reset' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
