import { Box, Button, Grid, Typography } from "@mui/material";
import ModelType from "../components/ModelType";
import { modelTypes } from "../types/modelsTypes";
import Comment from "../components/Comment";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useModel } from "../contexts/ModelContext/ModelContext";
import { useEffect } from "react";
import { models } from "../utils/modelsKeys";
import { MdAutoGraph } from "react-icons/md";
import Plot from "react-plotly.js";

const ModelPage = () => {
  // contexts
  const { modelType, renderModel, model } = useModel();

  useEffect(() => {
    const type = modelTypes.find((type) => type.name === modelType);
    const modelJson: any = models.find((model: any) => {
      return model.data[0].type === type?.plotly;
    });

    renderModel(modelJson);
  }, [modelType]);

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
                  Textual Models
                </Typography>
                {modelTypes.map((type) => {
                  return type.type === "Textual" ? (
                    <ModelType TypeRef={type} key={type.name} />
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
                  Numerical Models
                </Typography>
                {modelTypes.map((type) => {
                  return type.type === "Numerical" ? (
                    <ModelType TypeRef={type} key={type.name} />
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
              <Grid
                height="100%"
                p={2}
                sx={{
                  border: "1px solid gray",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  fontSize={12}
                  color="gray"
                  textTransform="uppercase"
                  mb={1}
                >
                  Overview
                </Typography>
                <div>
                  {model ? (
                    <>
                      <Plot
                        data={model?.data}
                        layout={model?.layout}
                        useResizeHandler
                        style={{ width: "100%", height: "100%" }}
                      />
                    </>
                  ) : (
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      height="40vh"
                      gap={1}
                    >
                      <Grid item>
                        <MdAutoGraph size={120} color="#d3d3d3" />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" color="#d3d3d3">
                          There is no visualization yet
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Comment />
            </Grid>
            <Grid item xs={0.5}>
              <Button
                variant="contained"
                sx={{
                  float: "right",
                  textTransform: "none",
                  mb: "20px",
                }}
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
