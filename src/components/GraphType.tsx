import { Box, IconButton } from "@mui/material";
import { IGraphType } from "../utils/graphsTypes";
import { useState } from "react";

interface Props {
  graphType: IGraphType;
}

const GraphType = ({ graphType }: Props) => {
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
        backgroundColor: "#e5e5e5",
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
        sx={{
          transition: "transform 0.3s",
          transform: isHovered ? "scale(1.3)" : "scale(1)",
        }}
      >
        {<graphType.Icon size={30} />}
      </IconButton>
    </Box>
  );
};

export default GraphType;
