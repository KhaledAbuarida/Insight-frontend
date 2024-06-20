import { Container, Box, Typography } from "@mui/material";
import GraphType from "./GraphType";
import { graphsTypes } from "../global/graphsTypes";
import { useGraph } from "../contexts/DataContext/GraphContext/GraphContext";

const GraphsList = () => {
  // contexts
  const { graphType } = useGraph();

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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {graphsTypes.map((graph) => (
          <GraphType TypeRef={graph} key={graph.name} />
        ))}
      </Box>
    </Container>
  );
};

export default GraphsList;
