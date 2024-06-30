import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { NavLink } from "react-router-dom";
import { useData } from "../contexts/DataContext/DataContext";

const DataTable = () => {
  const { data, numericalHeaders, categoricalHeaders } = useData();

  const headers = [...(numericalHeaders || []), ...(categoricalHeaders || [])];
  return (
    <Box pt="100px">
      <Grid container justifyContent="space-between">
        <Grid>
          <Typography variant="h5" sx={{ mb: "20px", color: "gray" }}>
            Your Dataset
          </Typography>
        </Grid>

        <Grid>
          <Button variant="contained">
            <NavLink
              to="/visualize"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Start Visualize
            </NavLink>
          </Button>
        </Grid>
      </Grid>
      <DataGrid
        rows={data}
        columns={headers}
        density="compact"
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 18,
            },
          },
        }}
        // slots={{ toolbar: GridToolbar }}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
