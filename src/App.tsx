import AppHeader from "./components/app-header/AppHeader";
import "./App.css";
import { Box, Grid } from "@mui/material";
import { Sidebar } from "./components/side-bar/Sidebar";
import { DynamicChart } from "./components/charts/DynamicChart";
import Upload from "./components/upload/Upload";
import UploadPage from "./pages/uploadPage/UploadPage";
import DataTable from "./components/DataTable";
import DataSourcePage from "./pages/dataSourcePage/DataSourcePage";
import VisualizePage from "./pages/dataSourcePage/visualizePage/VisualizePage";
import DropZone from "./components/DropZone";

const App = () => {
  return (
    <div>
      {/* <DataSourcePage /> */}
      <AppHeader />
      <UploadPage />

      {/* <VisualizePage /> */}
    </div>
    // <div className="app-container">
    //   <Grid container spacing={3}>
    //     <Grid item xs={1.5}>
    //       <Sidebar />
    //     </Grid>
    //     <Grid item>
    //       <Grid container direction="column" spacing={3}>
    //         <Grid item>sss</Grid>
    //         <Grid item>
    //           {/* Chart */}
    //           <Box
    //             sx={{
    //               border: "1px solid gray",
    //               padding: "20px",
    //               backgroundColor: "#fff",
    //             }}
    //           >
    //             <DynamicChart />
    //           </Box>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default App;
