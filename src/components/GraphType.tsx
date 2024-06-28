import { Box, IconButton } from "@mui/material";
import { IGraphType } from "../types/graphsTypes";
import { useState } from "react";
import { useGraph } from "../contexts/GraphContext/GraphContext";
import { useData } from "../contexts/DataContext/DataContext";
import { HistogramAPI } from "../api/visualizationAPI";
import { Histogram } from "../utils/jsonGraphs";

interface Props {
  TypeRef: IGraphType;
}

const GraphType = ({ TypeRef }: Props) => {
  // contexts
  const { selectGraphType, graphType, renderGraph } = useGraph();
  const { dataId, columnPicker } = useData();

  const [isHovered, setIsHovered] = useState(false);

  // handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChooseGraph = async () => {
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
    }

    selectGraphType(TypeRef.name);
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
