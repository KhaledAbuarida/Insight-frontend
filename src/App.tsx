import AppHeader from "./components/AppHeader";
import "./App.css";
import { Box, Grid } from "@mui/material";
import Upload from "./components/Upload";
import DataTable from "./components/DataTable";
import DataSourcePage from "./pages/DataSourcePage";
import VisualizePage from "./pages/VisualizePage";
import DropZone from "./components/DropZone";
import Spreadsheet from "./components/Spreadsheet";

const App = () => {
  return (
    <div>
      <AppHeader />
      {/* <DataSourcePage /> */}
      {/* <Home /> */}
      <VisualizePage />
      {/* <Spreadsheet /> */}
      {/* <UploadPage /> */}
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
