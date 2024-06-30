import { InputLabel, TextField, Typography, Grid } from "@mui/material";
import { MdDashboardCustomize } from "react-icons/md";
import { useGraph } from "../contexts/GraphContext/GraphContext";

const CustomizeGraph = () => {
  // contexts
  const {
    graphType,
    xlabel,
    ylabel,
    changeXLabel,
    changeYLabel,
    graphTitle,
    changeGraphTitle,
  } = useGraph();

  if (!graphType) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        mt={15}
        gap={2}
      >
        <Grid item>
          <MdDashboardCustomize size={100} color="#d3d3d3" opacity="20%" />
        </Grid>
        <Grid item>
          <Typography variant="h6" color="gray" textAlign="center">
            Choose Graph Type For Customization
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction="column"
      spacing={1}
      sx={{ backgroundColor: "#2d3540" }}
      p="0px 20px"
    >
      <Grid item>
        <Typography
          variant="h6"
          fontSize={13}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          color={"gray"}
          margin="5px 0px"
        >
          Customize Graph
        </Typography>
      </Grid>

      <Grid item>
        <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
          Title
        </InputLabel>
        <TextField
          variant="outlined"
          value={graphTitle}
          onChange={(e) => changeGraphTitle(e.target.value)}
          fullWidth
          size="small"
          sx={{ backgroundColor: "#e5e5e5", borderRadius: "5px" }}
        />
      </Grid>

      {graphType !== "PieChart" && (
        <>
          <Grid item>
            <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
              X Label
            </InputLabel>
            <TextField
              variant="outlined"
              value={xlabel}
              onChange={(e) => changeXLabel(e.target.value)}
              fullWidth
              size="small"
              sx={{ backgroundColor: "#e5e5e5", borderRadius: "5px" }}
            />
          </Grid>

          <Grid item>
            <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
              Y Label
            </InputLabel>
            <TextField
              variant="outlined"
              value={ylabel}
              onChange={(e) => changeYLabel(e.target.value)}
              fullWidth
              size="small"
              sx={{ backgroundColor: "#e5e5e5", borderRadius: "5px" }}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CustomizeGraph;
