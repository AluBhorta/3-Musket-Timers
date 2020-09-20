import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getVerifiedUsername } from "./api/ApiClient";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Timer from "./components/Timer";
import TotalTimer from "./components/TotalTimer";

function App() {
  const [tenSecs, setTenSecs] = useState(0);
  const [oneSecs, setOneSecs] = useState(0);
  const [hundredMs, setHundredMs] = useState(0);

  const [username, setUsername] = useState("");

  useEffect(() => {
    getVerifiedUsername()
      .then((username: string) => {
        if (username) {
          setUsername(username);
        }
      })
      .catch((err) => console.error(err));
    return () => {};
  }, []);

  return (
    <>
      <Header username={username} />
      <Container maxWidth="md">
        <Grid container spacing={3} justify="space-evenly" alignItems="center">
          <Grid item>
            <Timer
              title="Timer 1"
              interval={10000}
              callbackTime={(t) => {
                setTenSecs(t);
              }}
            />
          </Grid>
          <Grid item>
            <Timer
              title="Timer 2"
              interval={1000}
              callbackTime={(t) => {
                setOneSecs(t);
              }}
            />
          </Grid>
          <Grid item>
            <Timer
              title="Timer 3"
              interval={100}
              callbackTime={(t) => {
                setHundredMs(t);
              }}
            />
          </Grid>
        </Grid>

        <TotalTimer tenSecs={tenSecs} oneSecs={oneSecs} hundredMs={hundredMs} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
