import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { IAttribute } from "../utils/attributes";
import { useData } from "../contexts/Dataset/DataContext";

export const AttributesPicker = () => {
  const [column, setColumn] = useState<string | null>(null);
  const [row, setRow] = useState<string | null>(null);
  const { headers } = useData();

  const handleColumnChange = (event: SelectChangeEvent) => {
    setColumn(event.target.value);
  };
  const handleRowChange = (event: SelectChangeEvent) => {
    setRow(event.target.value);
  };

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
            value={column || ""}
            label="column"
            onChange={handleColumnChange}
            sx={{ borderRadius: "5px" }}
          >
            {headers.map((at) => (
              <MenuItem key={at.field} value={at.field}>
                {at.headerName}
              </MenuItem>
            ))}
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
            value={row || ""}
            label="row"
            onChange={handleRowChange}
            sx={{ borderRadius: "5px" }}
          >
            {headers.map((at) => (
              <MenuItem key={at.field} value={at.field}>
                {at.headerName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
