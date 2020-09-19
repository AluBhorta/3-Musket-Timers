import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Chip,
} from "@material-ui/core";
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
    <>
      <Card>
        <CardContent>
          <div className="_center">
            <h1>
              {title || "Timer"} - (i {interval / 1000}s)
            </h1>
            <h1>{toFormattedTime(counter, interval)}</h1>
            <p>
              <Chip label={status} variant="outlined" />
            </p>

            <ButtonGroup variant="contained">
              {status === "HALTED" ? (
                <Button onClick={() => startTimer()}>Start</Button>
              ) : (
                <Button onClick={() => pauseTimer()}>Pause</Button>
              )}
              <Button color="primary" onClick={() => resetTimer()}>
                Reset
              </Button>
            </ButtonGroup>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Timer;
