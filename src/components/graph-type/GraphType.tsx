import { Box, IconButton } from "@mui/material";
import { IGraphType } from "../../utils/graphsTypes";
import "./GraphTypes.css";

interface Props {
  graphType: IGraphType;
}

const GraphType = ({ graphType }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#e5e5e5",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: " center",
      }}
    >
      <IconButton className="IconButton">
        {<graphType.Icon size={25} />}
      </IconButton>
    </Box>
  );
};

export default GraphType;
