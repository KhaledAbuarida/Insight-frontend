import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import Logo from "../global/Logo";

const LandingPage = () => {
  return (
    <Box sx={{ backgroundColor: "#EEEDEB" }}>
      {/* lets start  */}

      <Grid container p={3} justifyContent="space-between">
        <Logo />
        <Grid>
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
