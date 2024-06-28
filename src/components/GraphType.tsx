import { Box, IconButton } from "@mui/material";
import { IGraphType } from "../types/graphsTypes";
import { useState } from "react";
import { useGraph } from "../contexts/GraphContext/GraphContext";
import { useData } from "../contexts/DataContext/DataContext";
import {
  HistogramAPI,
  barChartAPI,
  lineChartAPI,
  pieChartAPI,
} from "../api/visualizationAPI";
import { Histogram } from "../utils/jsonGraphs";

interface Props {
  TypeRef: IGraphType;
}

const GraphType = ({ TypeRef }: Props) => {
  // contexts
  const { selectGraphType, graphType, renderGraph } = useGraph();
  const { dataId, columnPicker, rowPicker } = useData();

  const [isHovered, setIsHovered] = useState(false);

  // handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChooseGraph = async () => {
    selectGraphType(TypeRef.name);
    if (!dataId) {
      return;
    }
    if (!columnPicker) {
      return;
    }

    if (TypeRef.name === "Histogram") {
      const { data } = await HistogramAPI(dataId, columnPicker);
      const { histogram } = data;

      const histogramJson = JSON.parse(histogram);
      renderGraph(histogramJson);
      return;
    }

    if (!rowPicker) {
      return;
    }

    if (TypeRef.name === "PieChart") {
      const { data } = await pieChartAPI(dataId, columnPicker, rowPicker);
      const { piechart } = data;
      const piechartJson = JSON.parse(`${piechart}`);
      renderGraph(piechartJson);
      return;
    }

    if (TypeRef.name === "LineChart") {
      const { data } = await lineChartAPI(dataId, columnPicker, rowPicker);
      const { linechart } = data;
      const linechartJson = JSON.parse(`${linechart}`);
      renderGraph(linechartJson);
      return;
    }

    if (TypeRef.name === "BarChart") {
      const { data } = await barChartAPI(dataId, columnPicker, rowPicker);
      const { barchart } = data;
      const barchartJson = JSON.parse(`${barchart}`);
      renderGraph(barchartJson);
      return;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: graphType === TypeRef.name ? "#387ADF" : "#B7C9F2",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <IconButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleChooseGraph}
        sx={{
          transition: "transform 0.3s",
          transform: isHovered ? "scale(1.3)" : "scale(1)",
          color: graphType === TypeRef.name ? "#FFD23F" : "gray",
        }}
      >
        {<TypeRef.icon size={25} />}
      </IconButton>
    </Box>
  );
};

export default GraphType;
