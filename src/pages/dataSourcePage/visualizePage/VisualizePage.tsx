import { Box, Grid, Typography } from "@mui/material";
import { AttributesPicker } from "../../../components/AttributePicker";
import Attributes from "../../../utils/attributes";
import Graph from "../../../components/Graph";
import Comment from "../../../components/Comment";
import RightBar from "../../../components/RightBar";

const VisualizePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* SIDE BAR  */}
      <Grid container>
        <Grid
          item
          xs={1.8}
        >
          <RightBar />
        </Grid>
        {/* CENTER  */}
        <Grid
          item
          container
          xs={10.2}
          sx={{ backgroundColor: "#f3f4f5", height: "calc(100vh - 64px)" }}
          justifyContent={"center"}
        >
          {/* <HomeHeader /> */}
          <Grid
            container
            direction="column"
            spacing={2}
            wrap="nowrap"
            sx={{ padding: "25px 20px 0px 20px" }}
          >
            <Grid
              item
              xs={1}
            >
              <AttributesPicker attributes={Attributes} />
            </Grid>
            <Grid
              item
              xs={7}
            >
              <Graph />
            </Grid>
            <Grid
              item
              xs={4}
            >
              <Comment />
            </Grid>
          </Grid>
        </Grid>
        {/* RIGHT BAR  */}
      </Grid>
    </Box>
  );
};

export default VisualizePage;
