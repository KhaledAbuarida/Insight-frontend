import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { jsonContext } from "../contexts/jsonContext";
import { useContext } from "react";


const data = [
  {
    ID: "1",
    Name: "John",
    Age: "30",
    City: "New York"
  },
  {
    ID: "2",
    Name: "Alice",
    Age: "25",
    City: "Los Angeles"
  },
  {
    ID: "3",
    Name: "Michael",
    Age: "35",
    City: "Chicago"
  },
  {
    ID: "4",
    Name: "Sophia",
    Age: "28",
    City: "San Francisco"
  },
  {
    ID: "5",
    Name: "David",
    Age: "40",
    City: "Boston"
  }
]

const columns = [
  { field: "Name", headerName: "Name" },
  { field: "Age", headerName: "Age" },
  { field: "City", headerName: "City" },
];

const DataTable = () => {

const globalJson = useContext(jsonContext)

  return (
    <div style={{ width: "90vw" }}>
      <Grid
        container
        justifyContent="space-between"
      >
        <Grid>
          <Typography
            variant="h5"
            sx={{ mb: "20px", color: "gray" }}
          >
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
        columns={columns}
        getRowId={(row) => row.ID}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        autoHeight
        // rowsPerPageOptions={[10, 25, 50]}
        checkboxSelection
        disableRowSelectionOnClick // Here's the corrected property name
      />
      <button onClick={() => console.log(globalJson?.jsonData)}>
        click me
      </button>
    </div>
  );
};

export default DataTable;
