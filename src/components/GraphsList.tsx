import { Container, Box, Typography } from "@mui/material";
import GraphType from "./GraphType";
import { graphsTypes } from "../utils/graphsTypes";

const GraphsList = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        fontSize={13}
        textTransform={"uppercase"}
        fontWeight={"bold"}
        color={"gray"}
        margin="5px 0px"
      >
        Chart Types
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {graphsTypes.map((graph) => (
          <GraphType
            graphType={graph}
            key={graph.Name}
          />
        ))}
      </Box>
    </Container>
  );
};

export default GraphsList;
