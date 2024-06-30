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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useModel } from "../contexts/ModelContext/ModelContext";

interface Props {
  TypeRef: IModelType;
}

const ModelType = ({ TypeRef }: Props) => {
  // states
  const [open, setOpen] = useState(false);
  const [targetColumn, setTargetColumn] = useState<string | null>(null);

  // contexts
  const { numericalHeaders, categoricalHeaders } = useData();
  const { modelType, selectModelType } = useModel();

  const headers = [...(numericalHeaders || []), ...(categoricalHeaders || [])];

  const validationSchema = Yup.object().shape({
    targetColumn: Yup.string().required("Target column is required"),
  });

  // handlers
  const handleChooseModel = () => {
    selectModelType(TypeRef.name);
    // modelTypes.find((type) => type.name === modelType);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTargetColumn(null);
    setOpen(false);
  };

  if (
    [
      "Churn Prediction",
      "Time Series Prediction",
      "Text Classification",
    ].includes(TypeRef.name)
  ) {
    return (
      <>
        <Button
          sx={{
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
            bgcolor: modelType === TypeRef.name ? "green" : "#387ADF",
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
          <Formik
            initialValues={{ targetColumn: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleClose();
            }}
          >
            {({ errors, touched, handleChange }) => (
              <Form>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <FormControl
                      sx={{
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                      }}
                      size="small"
                      error={
                        touched.targetColumn && Boolean(errors.targetColumn)
                      }
                    >
                      <InputLabel id="select-columns" sx={{ fontSize: "15px" }}>
                        Target Column
                      </InputLabel>
                      <Field
                        as={Select}
                        name="targetColumn"
                        labelId="select-columns"
                        id="column"
                        value={targetColumn || ""}
                        label="Target Column"
                        onChange={(event: SelectChangeEvent) => {
                          handleChange(event);
                          setTargetColumn(event.target.value);
                        }}
                        sx={{ borderRadius: "5px" }}
                      >
                        {headers?.map((at) => (
                          <MenuItem key={at.field} value={at.field}>
                            {at.headerName}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.targetColumn && errors.targetColumn && (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.targetColumn}
                        </div>
                      )}
                    </FormControl>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button type="submit" autoFocus onClick={handleChooseModel}>
                    Agree
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </Dialog>
      </>
    );
  }

  return (
    <Button
      sx={{
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
        bgcolor: modelType === TypeRef.name ? "green" : "#387ADF",
        fontSize: "16px",
        textTransform: "inherit",
        fontWeight: "bold",
        flexWrap: "nowrap",
      }}
      onClick={handleChooseModel}
    >
      {TypeRef.name}
    </Button>
  );
};

export default ModelType;
