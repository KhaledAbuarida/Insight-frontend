import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import "./AttributePicker.css";
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
    <>
      <FormControl
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "20px",
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
          sx={{ borderRadius: "20px" }}
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

      <FormControl
        sx={{
          mt: 2,
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "20px",
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
          sx={{ borderRadius: "20px" }}
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
    </>
  );
};
