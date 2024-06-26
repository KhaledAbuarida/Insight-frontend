import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useData } from "../contexts/DataContext/DataContext";
import { useState } from "react";

const LandingPage = () => {
  // states
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // context
  const { isAuthenticated, userName, logout } = useAuth();
  const { deleteFile } = useData();

  // navigation
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfile = () => {
    navigate("/profile");
    handleCloseUserMenu();
  };

  const handleLogout = () => {
    logout();
    deleteFile();
    navigate("/");

    handleCloseUserMenu();
  };

  return (
    <Box sx={{ backgroundColor: "#EEEDEB" }}>
      {/* lets start  */}
      <Grid container p={3} justifyContent="space-between">
        <Logo />
        <Grid>
          {isAuthenticated ? (
            <>
              <Box
                sx={{
                  mr: "10px",
                  alignItems: "center",
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="user" src="./assets/user.png" />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-app-bar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleProfile}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Button>
                <NavLink
                  to="/register"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Sign up
                </NavLink>
              </Button>
              <Button variant="outlined" sx={{ ml: 2 }}>
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Login
                </NavLink>
              </Button>
            </>
          )}
        </Grid>
      </Grid>

      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="90vh"
          gap={3}
          wrap="nowrap"
        >
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            xs={6}
            p={4}
            gap={8}
          >
            <Grid container item gap={2}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }} width={20}>
                Beautiful Visualizations
              </Typography>
              <Typography variant="h6" color="gray" noWrap={false}>
                Turn your data into stunning visual stories with Insights. No
                code required.
              </Typography>
            </Grid>
            <Grid item container direction="column" gap={2}>
              <Button variant="contained">
                <NavLink
                  to="/upload"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  Get Started
                </NavLink>
              </Button>
              <Button variant="outlined">Contact Us</Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <img
              src="./assets/insight1.jpg"
              width="550"
              style={{
                borderRadius: "15px",
              }}
            />
          </Grid>
        </Grid>

        {/* <Grid
        container
        justifyContent="center"
        >
        <Typography
        variant="h3"
        sx={{ fontWeight: "bold" }}
        >
          Meet the Team
          </Typography>
          
        </Grid> */}
      </Container>
    </Box>
  );
};

export default LandingPage;
