import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Insight from "../components/Insight";
import { useGraph } from "../contexts/DataContext/GraphContext/GraphContext";

const ModelPage = () => {
  // contexts
  const { graph } = useGraph();

  return (
    <Box>
      <Grid container>
        <Grid item xs={1.8}>
          <Sidebar />
        </Grid>
        {/* CENTER  */}
        <Insight graphJson={graph} />
        {/* RIGHT BAR  */}
      </Grid>
    </Box>
  );
};

export default ModelPage;
