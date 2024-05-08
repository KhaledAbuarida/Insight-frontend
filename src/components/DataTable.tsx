import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { jsonContext } from "../contexts/jsonContext";
import { useContext } from "react";

const columns = [
  { field: "Name", headerName: "Name" },
  { field: "Age", headerName: "Age" },
  { field: "City", headerName: "City" },
];

const DataTable = () => {
  const globalJson = useContext(jsonContext);

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
        rows={globalJson!.jsonData}
        columns={globalJson!.jsonHeaders}
        // getRowId={(row) => row.ID}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 13,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        autoHeight
        // rowsPerPageOptions={[10, 25, 50]}
        checkboxSelection
        disableRowSelectionOnClick // Here's the corrected property name
      />
    
    </div>
  );
};

export default DataTable;
