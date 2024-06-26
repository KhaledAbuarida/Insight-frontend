import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Badge, Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { INavType } from "../types/navLinksType";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useData } from "../contexts/DataContext/DataContext";

const navLinks: INavType[] = [
  { page: "Visualize Data", path: "/visualize" },
  { page: "Dataset", path: "/dataset" },
  { page: "Statistics", path: "/statistics" },
  { page: "Model", path: "/model" },
  { page: "Upload Data", path: "/upload" },
];

const AppHeader = () => {
  // states
  const [currentPage, setCurrentPage] = useState<INavType | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // context
  const { logout } = useAuth();
  const { deleteFile } = useData();

  // navigation
  const navigate = useNavigate();

  // get current page url
  const location = useLocation();

  // handlers
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

  const handleClickLink = (link: INavType) => {
    setCurrentPage(link);
    navigate(link.path);
  };

  // Update currentPage based on the current URL
  useEffect(() => {
    const currentLink = navLinks.find((link) =>
      location.pathname.includes(link.path)
    );
    setCurrentPage(currentLink || null);
  }, [location.pathname]);

  return (
    <AppBar position="fixed">
      <Container maxWidth={false}>
        <Box
          sx={{
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* logo */}
          <Box sx={{ alignItems: "center" }}>
            <Logo />
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.page}
                sx={{
                  position: "relative",
                  color: "#fff",
                  overflow: "hidden",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "3px",
                    bottom: 0,
                    left: 0,
                    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                    transform:
                      currentPage?.path === link.path
                        ? "scaleX(1)"
                        : "scaleX(0)",
                    transformOrigin: "bottom right",
                    transition: "transform 0.3s ease-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                  },
                }}
                onClick={() => handleClickLink(link)}
              >
                {link.page}
              </Button>
            ))}
          </Box>

          {/* user profile */}
          <Box
            sx={{
              mr: "10px",
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
        </Box>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
