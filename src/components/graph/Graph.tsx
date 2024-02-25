// import { Box, MenuItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { useState } from "react";

const Graph = () => {
  const [type, setType] = useState<"line" | "bar">("line");
  return (
    <Box
      height="100%"
      width="auto"
      borderRadius={2}
      p={2}
      sx={{ border: "1px solid gray", backgroundColor: "#fff" }}
    >
      <TextField
        select
        value={type}
        onChange={(event) => setType(event.target.value as "line" | "bar")}
        label="series type"
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="line">line</MenuItem>
        <MenuItem value="bar">bar</MenuItem>
      </TextField>

      <div>
        <ResponsiveChartContainer
          series={[
            {
              type,
              data: [1, 2, 3, 2, 1],
            },
            {
              type,
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ["A", "B", "C", "D", "E"],
              scaleType: "band",
              id: "x-axis-id",
            },
          ]}
          height={200}
        >
          <BarPlot />
          <LinePlot />
          <ChartsXAxis
            label="X axis"
            position="bottom"
            axisId="x-axis-id"
          />
        </ResponsiveChartContainer>
      </div>
    </Box>
  );
};

export default Graph;
