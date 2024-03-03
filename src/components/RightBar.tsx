import { Grid } from "@mui/material";
import GraphsList from "./GraphsList";

const RightBar = () => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#2d3540",
          height: "calc(100vh - 64px)",
          paddingTop: "20px",
        }}
      >
        <GraphsList />
      </Grid>
    </>
  );
};

export default RightBar;
