import { Grid } from "@mui/material";
import GraphsList from "./GraphsList";
import CustomizeGraph from "./CustomizeGraph";
import { useState } from "react";

const Sidebar = () => {
  const [chartType, setChartType] = useState<string>("histogram");
  return (
    <Grid container>
      <Grid
        container
        direction="column"
        gap={3}
        wrap="nowrap"
        sx={{
          backgroundColor: "#2d3540",
          height: "calc(100vh - 64px)",
          paddingTop: "20px",
        }}
      >
        <Grid>
          <GraphsList setChartType={setChartType} chartType={chartType}/>
        </Grid>

        {/* customize graph */}
        <Grid>
          <CustomizeGraph chartType={chartType} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
