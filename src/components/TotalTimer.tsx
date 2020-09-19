import { Card, CardContent } from "@material-ui/core";
import React from "react";
import { toFormattedTime } from "../util";

const TotalTimer: React.FC<{
  tenSecs: number;
  oneSecs: number;
  hundredMs: number;
}> = ({ tenSecs, oneSecs, hundredMs }) => {
  const totalSecs = tenSecs * 10 + oneSecs + hundredMs * 0.1;

  return (
    <>
      <Card>
        <CardContent>
          <div className="_center">
            <h1>Total Timer</h1>
            <h1>{toFormattedTime(totalSecs, 1000)}</h1>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TotalTimer;
