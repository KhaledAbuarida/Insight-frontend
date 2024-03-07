import { Grid } from "@mui/material";
import GraphsList from "./GraphsList";
import CustomizeGraph from "./CustomizeGraph";

const Sidebar = () => {
  return (
    <Grid container>
      <Grid
        container
        sx={{
          backgroundColor: "#2d3540",
          height: "calc(100vh - 64px)",
          paddingTop: "20px",
        }}
      >
        <GraphsList />

        {/* customize graph */}
        <CustomizeGraph />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
