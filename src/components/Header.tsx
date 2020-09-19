import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

const Header: React.FC<{}> = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <h1>3 Musket-Timers</h1>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
