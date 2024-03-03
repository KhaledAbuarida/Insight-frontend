import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { IAttribute } from "../../utils/attributes";

interface Props {
  attributes: IAttribute[];
}

export const AttributesPicker = ({ attributes }: Props) => {
  const [column, setColumn] = useState("");
  const [row, setRow] = useState("");

  const handleColumnChange = (event: SelectChangeEvent) => {
    setColumn(event.target.value);
  };
  const handleRowChange = (event: SelectChangeEvent) => {
    setRow(event.target.value);
  };

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={6}
      >
        <FormControl
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "5px",
            mt: 1,
          }}
          size="small"
        >
          <InputLabel id="select-columns">Column</InputLabel>
          <Select
            labelId="select-columns"
            id="column"
            value={column}
            label="column"
            onChange={handleColumnChange}
            sx={{ borderRadius: "5px" }}
          >
            {attributes.map((at) => (
              <MenuItem
                key={at.field}
                value={at.field}
              >
                {at.headerName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid
        item
        xs={6}
      >
        <FormControl
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "5px",
            mt: 1,
          }}
          size="small"
        >
          <InputLabel id="select-rows">Row</InputLabel>
          <Select
            labelId="select-rows"
            id="row"
            value={row}
            label="row"
            onChange={handleRowChange}
            sx={{ borderRadius: "5px" }}
          >
            {attributes.map((at) => (
              <MenuItem
                key={at.field}
                value={at.field}
              >
                {at.headerName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
