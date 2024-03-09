import { Grid } from "@mui/material";
import GraphsList from "./GraphsList";
import CustomizeGraph from "./CustomizeGraph";
import { Dispatch } from "react";

interface Props {
  setChartType: Dispatch<React.SetStateAction<string | null>>;
  chartType: string | null;
  title: string;
  setTitle: Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ setChartType, chartType, title, setTitle }: Props) => {
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
          <GraphsList
            setChartType={setChartType}
            chartType={chartType}
          />
        </Grid>

        {/* customize graph */}
        <Grid>
          <CustomizeGraph
            chartType={chartType}
            title={title}
            setTitle={setTitle}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
