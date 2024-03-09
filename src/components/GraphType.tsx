import { Box, IconButton } from "@mui/material";
import { IGraphType } from "../utils/graphsTypes";
import { useState } from "react";

interface Props {
  graphType: IGraphType;
  onChooseGraph: (type: string) => void;
  chartType: string;
}

const GraphType = ({ graphType, onChooseGraph, chartType }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: chartType === graphType.value ? "#387ADF" : "#B7C9F2",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <IconButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onChooseGraph(graphType.value)}
        sx={{
          transition: "transform 0.3s",
          transform: isHovered ? "scale(1.3)" : "scale(1)",
          color: chartType === graphType.value ? "#FFD23F" : "gray",
        }}
      >
        {<graphType.icon size={30} />}
      </IconButton>
    </Box>
  );
};

export default GraphType;
