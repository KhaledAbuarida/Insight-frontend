import AppHeader from "./components/AppHeader";
import "./App.css";
import { Grid } from "@mui/material";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Signup from "./components/sss";

const App = () => {
  return (
    <div>
      <AppHeader />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
          
        </Grid>
      </Grid>
      <Signup/>
    </div>
  );
};

export default App;
