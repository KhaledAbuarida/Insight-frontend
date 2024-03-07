import React, { useState } from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  SelectChangeEvent,
  Grid,
} from "@mui/material";

const CustomizeGraph: React.FC = () => {
  const [chartType, setChartType] = useState<string>("histogram");
  const [xLabel, setXLabel] = useState<string>("");
  const [yLabel, setYLabel] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("#3498db");
  const [numberOfBins, setNumberOfBins] = useState<number>(10);
  const [lineshape, setLineshape] = useState<string>("linear");
  const [Barmode, setBarmode] = useState<string>("relative");
  const [columnToDistribute, setColumnToDistribute] = useState<string>("");
  const [normalizationType, setNormalizationType] = useState<string>("none");
  const [dataPointsToShow, setDataPointsToShow] = useState<string>("all");
  const [scatterSize, setScatterSize] = useState<number>(5);
  const [scatterColor, setScatterColor] = useState<string>("");
  const [scatterSymbols, setScatterSymbols] = useState<string>("");

  const handleChartTypeChange = (event: SelectChangeEvent) => {
    setChartType(event.target.value as string);
  };

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
        <InputLabel
          id="chart-type-label"
          sx={{ color: "#fff", fontSize: "0.8rem" }}
        >
          Chart Type
        </InputLabel>
        <Select
          size="small"
          labelId="chart-type-label"
          label="Chart Type"
          value={chartType}
          onChange={handleChartTypeChange}
          fullWidth
          sx={{ backgroundColor: "#e5e5e5" }}
        >
          <MenuItem value="histogram">Histogram</MenuItem>
          <MenuItem value="line">Line Chart</MenuItem>
          <MenuItem value="BarChart">Bar Chart</MenuItem>
          <MenuItem value="boxPlot">Box Plot</MenuItem>
          <MenuItem value="scatterPlot">Scatter Plot</MenuItem>
          <MenuItem value="pie">Pie Chart</MenuItem>
        </Select>
      </Grid>

      <Grid item>
        <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
          Title
        </InputLabel>
        <TextField
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          size="small"
          sx={{ backgroundColor: "#e5e5e5" }}
        />
      </Grid>

      {chartType !== "pie" && (
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
              sx={{ backgroundColor: "#e5e5e5" }}
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
              sx={{ backgroundColor: "#e5e5e5" }}
            />
          </Grid>

          <Grid item>
            <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
              Color
            </InputLabel>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Grid>
        </>
      )}

      {chartType === "histogram" && (
        <>
          <Grid item>
            <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
              Function type
            </InputLabel>
            <Select
              value={Barmode}
              onChange={(e) => setBarmode(e.target.value)}
              fullWidth
              size="small"
              sx={{ backgroundColor: "#e5e5e5" }}
            >
              <MenuItem value="count">Count</MenuItem>
              <MenuItem value="sum">Sum</MenuItem>
              <MenuItem value="average">Average</MenuItem>
            </Select>
          </Grid>

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

          <Grid item>
            <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
              Number of Bins
            </InputLabel>
            <TextField
              type="number"
              value={numberOfBins}
              onChange={(e) => setNumberOfBins(Number(e.target.value))}
              fullWidth
              size="small"
              sx={{ backgroundColor: "#e5e5e5" }}
            />
          </Grid>

          <Grid item>
            <InputLabel sx={{ color: "#fff", fontSize: "0.8rem" }}>
              Normalization Type:
            </InputLabel>
            <Select
              value={normalizationType}
              onChange={(e) => setNormalizationType(e.target.value)}
              fullWidth
              size="small"
              sx={{ backgroundColor: "#e5e5e5" }}
            >
              <MenuItem value="percent">Percent</MenuItem>
              <MenuItem value="probability">Probability</MenuItem>
              <MenuItem value="density">Density</MenuItem>
              <MenuItem value="none">None</MenuItem>
            </Select>
          </Grid>
        </>
      )}

      {chartType === "line" && (
        <div>
          <Typography style={{ marginBottom: "1rem" }}>Line Shape:</Typography>
          <FormControl style={{ marginBottom: "1rem" }}>
            <Select
              value={lineshape}
              onChange={(e) => setLineshape(e.target.value)}
            >
              <MenuItem value={"linear"}>Linear</MenuItem>
              <MenuItem value={"spline"}>Spline</MenuItem>
            </Select>
          </FormControl>

          <Typography style={{ marginBottom: "1rem" }}>
            Column to Distribute:
          </Typography>
          <FormControl style={{ marginBottom: "1rem" }}>
            <Select
              value={columnToDistribute}
              onChange={(e) => setColumnToDistribute(e.target.value)}
            >
              <MenuItem value="data">data</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}

      {/* Include other chart type options similarly */}
    </Grid>
  );
};

export default CustomizeGraph;
