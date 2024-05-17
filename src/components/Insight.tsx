import { Button, Grid } from "@mui/material";
import { AttributesPicker } from "./AttributePicker";
import Comment from "../components/Comment";
import Graph from "./Graph";

interface Props {
  graphJson: any | null;
}

const Insight = ({ graphJson }: Props) => {
  return (
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
        <Grid item xs={0.5}>
          <AttributesPicker />
        </Grid>
        <Grid item xs={9}>
          <Graph graphJson={graphJson} />
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
  );
};

export default Insight;
