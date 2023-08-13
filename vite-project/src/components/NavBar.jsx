import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">People Source Co.</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
