import { Container, Box } from "@mui/material";
import GraphType from "../graph-type/GraphType";
import { graphsTypes } from "../../utils/graphsTypes";

const GraphsList = () => {
  return (
    <Container sx={{ paddingTop: "20px" }}>
      <h5>Chart Types</h5>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
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
