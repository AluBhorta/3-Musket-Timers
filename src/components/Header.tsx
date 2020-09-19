import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

const Header: React.FC<{
  username?: string;
}> = ({ username }) => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <div style={{ flex: 1 }}>
            <h1>3 Musket-Timers</h1>
          </div>

          <p>{username}</p>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
