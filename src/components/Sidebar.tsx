import { Grid } from "@mui/material";
import GraphsList from "./GraphsList";
import CustomizeGraph from "./CustomizeGraph";

const Sidebar = () => {
  // contexts
  return (
    <Grid container>
      <Grid
        container
        direction="column"
        gap={3}
        wrap="nowrap"
        sx={{
          backgroundColor: "#2d3540",
          height: "calc(100vh - 60px)",
          paddingTop: "20px",
        }}
      >
        <Grid>
          <GraphsList />
        </Grid>

        {/* customize graph */}
        <Grid>
          <CustomizeGraph />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
