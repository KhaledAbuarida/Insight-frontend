import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useData } from "../contexts/DataContext/DataContext";
import { filterAPI } from "../api/visualizationAPI";

export const AttributesPicker = () => {
  // states

  // contexts
  const {
    numericalHeaders,
    categoricalHeaders,
    dataId,
    columnPicker,
    addColumnPicker,
    rowPicker,
    addRowPicker,
    addAvailableGraphs,
  } = useData();

  const headers = [...(numericalHeaders || []), ...(categoricalHeaders || [])];

  const handleColumnChange = (event: SelectChangeEvent) => {
    addColumnPicker(event.target.value);
  };
  const handleRowChange = (event: SelectChangeEvent) => {
    addRowPicker(event.target.value);
  };

  // if (!numericalHeaders || !categoricalHeaders) {
  //   return;
  // }

  useEffect(() => {
    const fetchFilter = async () => {
      if (!dataId) {
        return;
      }

      const { data } = await filterAPI(dataId, columnPicker, rowPicker);
      const list = data.valid_charts.results;

      addAvailableGraphs(list);
      // console.log(data);
    };

    fetchFilter();
  }, [columnPicker, rowPicker]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          size="small"
        >
          <InputLabel id="select-columns" sx={{ fontSize: "15px" }}>
            Column
          </InputLabel>
          <Select
            labelId="select-columns"
            id="column"
            value={columnPicker || ""}
            label="column"
            onChange={handleColumnChange}
            sx={{ borderRadius: "5px" }}
          >
            {headers.map((at) =>
              at.headerName !== "id" ? (
                <MenuItem key={at.field} value={at.field}>
                  {at.headerName}
                </MenuItem>
              ) : null
            )}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          size="small"
        >
          <InputLabel id="select-rows" sx={{ fontSize: "15px" }}>
            Row
          </InputLabel>
          <Select
            labelId="select-rows"
            id="row"
            value={rowPicker || ""}
            label="row"
            onChange={handleRowChange}
            sx={{ borderRadius: "5px" }}
          >
            {headers.map((at) =>
              at.headerName !== "id" ? (
                <MenuItem key={at.field} value={at.field}>
                  {at.headerName}
                </MenuItem>
              ) : null
            )}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
