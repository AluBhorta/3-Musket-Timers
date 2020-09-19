import React, { useState } from "react";
import Timer from "./components/Timer";

import "./App.css";
import { toFormattedTime } from "./util";

function App() {
  const [tenSecs, setTenSecs] = useState(0);
  const [oneSecs, setOneSecs] = useState(0);
  const [hundredMs, setHundredMs] = useState(0);

  return (
    <div className="container">
      <Timer
        title="Timer 1"
        interval={10000}
        callbackTime={(t) => {
          setTenSecs(t);
        }}
      />
      <Timer
        title="Timer 2"
        interval={1000}
        callbackTime={(t) => {
          setOneSecs(t);
        }}
      />
      <Timer
        title="Timer 3"
        interval={100}
        callbackTime={(t) => {
          setHundredMs(t);
        }}
      />

      <h1>{toFormattedTime(tenSecs * 10 + oneSecs + hundredMs * 0.1, 1000)}</h1>
    </div>
  );
}

export default App;
