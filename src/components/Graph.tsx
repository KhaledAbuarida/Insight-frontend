import { Grid, Typography } from "@mui/material";
import React from "react";
import Plot from "react-plotly.js";
import { GraphJSON } from "../utils/graph";

const GraphComponent: React.FC = () => {
  const plotlyData = {
    data: [
      {
        x: [1, 2, 3, 4, 5],
        y: [10, 15, 13, 17, 18],
        type: "scatter",
        name: "Series 1",
      },
      {
        x: [1, 2, 3, 4, 5],
        y: [16, 5, 11, 9, 7],
        type: "scatter",
        name: "Series 2",
      },
      {
        x: [1, 2, 3, 4, 5],
        y: [12, 9, 15, 12, 14],
        type: "scatter",
        name: "Series 3",
      },
    ],
    layout: {
      title: "Sample Graph",
      xaxis: {
        title: "X Axis",
      },
      yaxis: {
        title: "Y Axis",
      },
    },
  };

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
      <Typography
        fontSize={12}
        color="gray"
        textTransform="uppercase"
        mb={1}
      >
        Overview
      </Typography>
      <div>
        <Plot
          data={GraphJSON.data}
          layout={plotlyData.layout}
          useResizeHandler
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Grid>
  );
};

export default GraphComponent;
