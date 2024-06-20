import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <Typography
      variant="h5"
      sx={{ fontWeight: "bold" }}
    >
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <img
          src="./assets/insight.png"
          width={45}
          style={{
            paddingRight: "5px",
          }}
        />
        INSIGHTS
      </NavLink>
    </Typography>
  );
};

export default Logo;
