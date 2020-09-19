import React, { useEffect, useRef, useState } from "react";
import { toFormattedTime } from "../util";

export type TimerStatus = "RUNNING" | "PAUSED";

const Timer: React.FC<{
  title?: string;
  interval: number;
  callbackTime: (t: number) => void;
}> = ({ interval, title, callbackTime }) => {
  const [time1, setTime1] = useState(0);
  const interval1 = useRef<NodeJS.Timeout>();

  const pauseTimer = () => {
    interval1.current && clearInterval(interval1.current);
  };

  const startTimer = () => {
    pauseTimer();
    interval1.current = setInterval(() => {
      setTime1((t) => {
        callbackTime(t + 1);
        return t + 1;
      });
    }, interval);
  };

  const resetTimer = () => {
    pauseTimer();
    setTime1(0);
    callbackTime(0);
  };

  useEffect(() => {
    startTimer();
    return () => {
      resetTimer();
    };
  }, []);

  return (
    <div className="timer">
      <h1>
        <span>
          {title || "Timer"}-(i {interval / 1000}s){" "}
        </span>
        <span>
          {toFormattedTime(time1, interval)}
        </span>
      </h1>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => pauseTimer()}>Pause</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
  );
};

export default Timer;
