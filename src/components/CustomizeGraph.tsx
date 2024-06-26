import { useState } from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { MdDashboardCustomize } from "react-icons/md";
import { useGraph } from "../contexts/GraphContext/GraphContext";

const CustomizeGraph = () => {
  // contexts
  const { graphType } = useGraph();

  const [xLabel, setXLabel] = useState<string>("");
  const [yLabel, setYLabel] = useState<string>("");
  const [color, setColor] = useState<string>("#3498db");
  const [numberOfBins, setNumberOfBins] = useState<number>(10);
  const [lineshape, setLineshape] = useState<string>("linear");
  const [Barmode, setBarmode] = useState<string>("relative");
  const [columnToDistribute, setColumnToDistribute] = useState<string>("data");
  const [normalizationType, setNormalizationType] = useState<string>("none");
  const [dataPointsToShow, setDataPointsToShow] = useState<string>("all");
  const [scatterSize, setScatterSize] = useState<number>(5);
  const [scatterColor, setScatterColor] = useState<string>("");
  const [scatterSymbols, setScatterSymbols] = useState<string>("");

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
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
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
              value={xLabel}
              onChange={(e) => setXLabel(e.target.value)}
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
              value={yLabel}
              onChange={(e) => setYLabel(e.target.value)}
              fullWidth
              size="small"
              sx={{ backgroundColor: "#e5e5e5", borderRadius: "5px" }}
            />
          </Grid>
        </>
      )}

      {graphType === "Histogram" && (
        <>
          <Grid item>
            <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
              ColumnToDistribute
            </InputLabel>
            <Select
              value={columnToDistribute}
              onChange={(e) => setColumnToDistribute(e.target.value)}
              fullWidth
              size="small"
              sx={{ backgroundColor: "#e5e5e5" }}
            >
              <MenuItem value="data">data</MenuItem>
            </Select>
          </Grid>
        </>
      )}

      {graphType === "LineChart" && (
        <Grid item>
          <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
            Column to Distribute:
          </InputLabel>
          <FormControl style={{ marginBottom: "1rem" }}>
            <Select
              value={columnToDistribute}
              onChange={(e) => setColumnToDistribute(e.target.value)}
              sx={{ backgroundColor: "#e5e5e5" }}
              fullWidth
              size="small"
            >
              <MenuItem value="data">data</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      )}
    </Grid>
  );
};

export default CustomizeGraph;
