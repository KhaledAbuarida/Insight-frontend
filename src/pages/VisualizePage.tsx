import { Box, Grid, Typography } from "@mui/material";
import { AttributesPicker } from "../components/AttributePicker";
import Attributes from "../utils/attributes";
import Graph from "../components/Graph";
import Sidebar from "../components/Sidebar";
import Insight from "../components/Insight";

const VisualizePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* SIDE BAR  */}
      <Grid container>
        <Grid
          item
          xs={1.8}
        >
          <Sidebar />
        </Grid>
        {/* CENTER  */}
        <Insight />
        {/* RIGHT BAR  */}
      </Grid>
    </Box>
  );
};

export default VisualizePage;
