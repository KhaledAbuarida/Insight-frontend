import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <Typography
      variant="h5"
      sx={{ fontWeight: "bold" }}
    >
      <img
        src="./assets/insight.png"
        width={45}
        style={{
          paddingRight: "5px",
        }}
      />
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        INSIGHTS
      </NavLink>
    </Typography>
  );
};

export default Logo;
