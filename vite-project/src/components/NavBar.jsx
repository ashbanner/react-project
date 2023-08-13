import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">People Source Co.</Typography>
        <div style={{ marginLeft: "auto" }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="Logout"
            onClick={handleLogout}
          >
            <LogoutIcon />
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              Logout
            </Typography>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
