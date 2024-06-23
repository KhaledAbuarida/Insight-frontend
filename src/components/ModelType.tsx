import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { IModelType } from "../types/modelsTypes";
import { useState } from "react";
import { useData } from "../contexts/DataContext/DataContext";

interface Props {
  TypeRef: IModelType;
}

const ModelType = ({ TypeRef }: Props) => {
  // states
  const [open, setOpen] = useState(false);
  const [targetColumn, setTargetColumn] = useState<string | null>(null);

  // contexts
  const { headers } = useData();

  // handlers
  const handleColumnChange = (event: SelectChangeEvent) => {
    setTargetColumn(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTargetColumn(null);
    setOpen(false);
  };

  if (TypeRef.name === "Text Classification") {
    return (
      <>
        <Button
          sx={{
            // backgroundColor: graphType === TypeRef.name ? "#387ADF" : "#B7C9F2",
            backgroundColor: "#387ADF",
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            margin: "5px 20px",
            "&:hover": {
              backgroundColor: "#2C5FB5",
            },
            color: "#fff",
            fontSize: "16px",
            textTransform: "inherit",
            fontWeight: "bold",
            flexWrap: "nowrap",
          }}
          onClick={handleClickOpen}
        >
          {TypeRef.name}
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Please, choose the target column"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <FormControl
                sx={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
                size="small"
              >
                <InputLabel id="select-columns" sx={{ fontSize: "15px" }}>
                  Target Column
                </InputLabel>
                <Select
                  labelId="select-columns"
                  id="column"
                  value={targetColumn || ""}
                  label="Target Column"
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
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  return (
    <Button
      sx={{
        // backgroundColor: graphType === TypeRef.name ? "#387ADF" : "#B7C9F2",
        backgroundColor: "#387ADF",
        width: "100%",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        margin: "5px 20px",
        "&:hover": {
          backgroundColor: "#2C5FB5",
        },
        color: "#fff",
        fontSize: "16px",
        textTransform: "inherit",
        fontWeight: "bold",
        flexWrap: "nowrap",
      }}
    >
      {TypeRef.name}
    </Button>
  );
};

export default ModelType;
