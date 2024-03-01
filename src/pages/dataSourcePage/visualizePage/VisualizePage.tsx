import { Box, Grid } from "@mui/material";
import { AttributesPicker } from "../../../components/attributes-picker/AttributePicker";
import Attributes from "../../../utils/attributes";
import Graph from "../../../components/graph/Graph";
import Comment from "../../../components/graph-comment/Comment";
import RightBar from "../../../components/right-bar/RightBar";

const VisualizePage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* SIDE BAR  */}
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={2}
          >
            sidebar
          </Grid>
          {/* CENTER  */}
          <Grid
            item
            container
            xs={8}
            sx={{ backgroundColor: "#f5f5f5", height: "100vh" }}
          >
            <Grid
              container
              direction="column"
              spacing={4}
              p={1}
              wrap="nowrap"
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
          <Grid
            item
            xs={2}
          >
            <RightBar />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default VisualizePage;
