import { Grid, Typography } from "@mui/material";
import { MdAutoGraph } from "react-icons/md";
import Plot from "react-plotly.js";

interface Props {
  graphJson: any | null;
}

const Graph = ({ graphJson }: Props) => {
  return (
    <Grid
      height="100%"
      p={2}
      sx={{
        border: "1px solid gray",
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
    >
      <Typography fontSize={12} color="gray" textTransform="uppercase" mb={1}>
        Overview
      </Typography>
      <div>
        {graphJson ? (
          <Plot
            data={graphJson?.data}
            layout={graphJson?.layout}
            useResizeHandler
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="40vh"
            gap={1}
          >
            <Grid item>
              <MdAutoGraph size={120} color="#d3d3d3" />
            </Grid>
            <Grid item>
              <Typography variant="h6" color="#d3d3d3">
                There is no visualization yet
              </Typography>
            </Grid>
          </Grid>
        )}
      </div>
    </Grid>
  );
};

export default Graph;
