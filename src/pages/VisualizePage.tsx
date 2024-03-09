import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Insight from "../components/Insight";
import { useEffect, useState } from "react";
import { graphsTypes } from "../utils/graphsTypes";
import {
  Histogram,
  BoxPlot,
  BarChart,
  LineChart,
  ScatterPlot,
  PieChart,
} from "../utils/jsonGraphs";

const VisualizePage = () => {
  const [currentGraph, setCurrentGraph] = useState<string | null>(null);
  const [chartType, setChartType] = useState<any | null>(null);

  // customization
  const [title, setTitle] = useState<string>("");

  const graphs = [
    Histogram,
    BoxPlot,
    BarChart,
    LineChart,
    ScatterPlot,
    PieChart,
  ];

  useEffect(() => {
    const graphType = graphsTypes.find((type) => type.name === chartType);

    const graphJson: any = graphs.find((graph: any) => {
      if (graphType?.plotly === "scattergl") {
        if (graph.data[0].mode === "markers") {
          return graph;
        }
      } else if (graphType?.plotly === "line") {
        if (graph.data[0].mode === "markers+lines") {
          return graph;
        }
      } else {
        return graph.data[0].type === graphType?.plotly;
      }
    });

    setCurrentGraph(graphJson);
  }, [chartType, title]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* SIDE BAR  */}
      <Grid container>
        <Grid
          item
          xs={1.8}
        >
          <Sidebar
            setChartType={setChartType}
            chartType={chartType}
            title={title}
            setTitle={setTitle}
          />
        </Grid>
        {/* CENTER  */}
        <Insight graphJson={currentGraph} />
        {/* RIGHT BAR  */}
      </Grid>
    </Box>
  );
};

export default VisualizePage;
