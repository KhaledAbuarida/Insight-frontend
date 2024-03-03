import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InsightsIcon from "@mui/icons-material/Insights";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AppHeader = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <InsightsIcon sx={{ fontSize: "40px", pr: "3px", color: "gold" }} />
            <Typography variant="h6">
              <b>INSIGHTS</b>
            </Typography>
          </Box>

          {/* user profile */}
          <Box
            sx={{
              flexGrow: 0,
              mr: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Tooltip title="Messages">
              <Badge
                badgeContent={4}
                color="error"
                sx={{ marginRight: "30px" }}
              >
                <MailIcon sx={{ color: "#fff", fontSize: "25px" }} />
              </Badge>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt="user"
                  src="./assets/user.png"
                />
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
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
