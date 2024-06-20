import { Box, Grid, Typography } from "@mui/material";
import Insight from "../components/Insight";
import { useGraph } from "../contexts/DataContext/GraphContext/GraphContext";
import ModelType from "../components/ModelType";
import { modelTypes } from "../types/modelsTypes";

const ModelPage = () => {
  // contexts
  const { graph } = useGraph();

  return (
    <Box sx={{ mt: '60px'}}>
      <Grid container>
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
        <Insight graphJson={graph} />
        {/* RIGHT BAR  */}
      </Grid>
    </Box>
  );
};

export default ModelPage;
