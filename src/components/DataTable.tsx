import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useData } from "../contexts/DataContext/DataContext";

const DataTable = () => {
  const { data, headers } = useData();

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
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 12,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
