import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Insight from "../components/Insight";
import { useEffect } from "react";
import { graphsTypes } from "../types/graphsTypes";
import { useGraph } from "../contexts/GraphContext/GraphContext";
import { graphs } from "../utils/graphsKeys";

const VisualizePage = () => {
  // contexts
  const { graph, graphType, renderGraph } = useGraph();

  // useEffect(() => {
  //   const type = graphsTypes.find((type) => type.name === graphType);

  //   const graphJson: any = graphs.find((graph: any) => {
  //     if (type?.plotly === "scattergl") {
  //       if (graph.data[0].mode === "markers") {
  //         return graph;
  //       }
  //     } else if (type?.plotly === "line") {
  //       if (graph.data[0].mode === "markers+lines") {
  //         return graph;
  //       }
  //     } else {
  //       return graph.data[0].type === type?.plotly;
  //     }
  //   });
  //   renderGraph(graphJson);
  // }, [graphType]);

  return (
    <Box sx={{ mt: "60px" }}>
      {/* SIDE BAR  */}
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

export default VisualizePage;
