import React, { useEffect, useRef, useState } from "react";
import { toFormattedTime } from "../util";

export type TimerStatus = "RUNNING" | "HALTED";

const Timer: React.FC<{
  title?: string;
  interval: number;
  callbackTime: (t: number) => void;
}> = ({ interval, title, callbackTime }) => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();
  const [status, setStatus] = useState<TimerStatus>("HALTED");

  const pauseTimer = () => {
    intervalRef.current && clearInterval(intervalRef.current);
    setStatus("HALTED");
  };

  const startTimer = () => {
    pauseTimer();
    intervalRef.current = setInterval(() => {
      setCounter((t) => {
        callbackTime(t + 1);
        return t + 1;
      });
    }, interval);
    setStatus("RUNNING");
  };

  const resetTimer = () => {
    pauseTimer();
    setCounter(0);
    callbackTime(0);
    setStatus("HALTED");
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
        <span>{toFormattedTime(counter, interval)}</span>
      </h1>
      <h3>{status}</h3>
      {status === "HALTED" ? (
        <>
          <button onClick={() => startTimer()}>Start</button>
        </>
      ) : (
        <>
          <button onClick={() => pauseTimer()}>Pause</button>
        </>
      )}
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
  );
};

export default Timer;
