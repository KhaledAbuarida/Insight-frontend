import { Box, Button, Grid, Typography } from "@mui/material";
import Insight from "../components/Insight";
import { useGraph } from "../contexts/GraphContext/GraphContext";
import ModelType from "../components/ModelType";
import { modelTypes } from "../types/modelsTypes";
import Graph from "../components/Graph";
import Comment from "../components/Comment";

const ModelPage = () => {
  // contexts
  const { graph } = useGraph();

  return (
    <Box sx={{ mt: "60px" }}>
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={1.8}>
          <Grid container>
            <Grid
              container
              direction="column"
              gap={3}
              wrap="nowrap"
              sx={{
                backgroundColor: "#2d3540",
                height: "calc(100vh - 60px)",
                paddingTop: "20px",
              }}
            >
              <Typography
                variant="h6"
                fontSize={13}
                textTransform={"uppercase"}
                fontWeight={"bold"}
                color={"gray"}
                margin="5px 20px"
              >
                Chart Types
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                {/* Numerical Models */}
                <Typography
                  variant="h6"
                  fontSize={13}
                  textTransform={"uppercase"}
                  fontWeight={"bold"}
                  color={"gray"}
                  margin="5px 20px"
                >
                  Numerical Models
                </Typography>
                {modelTypes.map((type) => {
                  return type.type === "Textual" ? (
                    <ModelType TypeRef={type} />
                  ) : null;
                })}
                {/* Textual Models */}
                <Typography
                  variant="h6"
                  fontSize={13}
                  textTransform={"uppercase"}
                  fontWeight={"bold"}
                  color={"gray"}
                  margin="5px 20px"
                >
                  Textual Models
                </Typography>
                {modelTypes.map((type) => {
                  return type.type === "Numerical" ? (
                    <ModelType TypeRef={type} />
                  ) : null;
                })}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* CENTER  */}
        <Grid
          item
          container
          xs={10.2}
          sx={{ backgroundColor: "#f3f4f5", height: "calc(100vh - 64px)" }}
          justifyContent={"center"}
        >
          <Grid
            container
            direction="column"
            spacing={2}
            wrap="nowrap"
            sx={{ padding: "25px 20px 0px 20px" }}
          >
            <Grid item xs={9}>
              <Graph graphJson={graph} />
            </Grid>
            <Grid item xs={1}>
              <Comment />
            </Grid>
            <Grid item xs={0.5}>
              <Button
                variant="contained"
                sx={{ float: "right", textTransform: "none", mb: "20px" }}
              >
                Save Sheet
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModelPage;
