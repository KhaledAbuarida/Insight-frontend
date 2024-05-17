import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useData } from "../contexts/Dataset/DataContext";

const DataTable = () => {
  const { data, headers } = useData();

  return (
    <div style={{ width: "90vw" }}>
      <Grid container justifyContent="space-between">
        <Grid>
          <Typography variant="h5" sx={{ mb: "20px", color: "gray" }}>
            Your Dataset
          </Typography>
        </Grid>

        <Grid>
          <Button variant="contained">
            <NavLink
              to="/home"
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
              pageSize: 13,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
