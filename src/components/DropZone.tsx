import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import csvtojson from "csvtojson";
import {
  CircularProgress,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { MdOutlineFileUpload } from "react-icons/md";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useData } from "../contexts/DataContext/DataContext";
import { preprocessingAPI } from "../api/dataAPI";

const DropZone = () => {
  const [uploadState, setUploadState] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    addHeaders,
    addData,
    fileTitle,
    addDataType,
    addFileTitle,
    deleteFile,
  } = useData();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
      setOpen(true);
    }
  }, []);

  const handleClose = async (type: string) => {
    setUploadState(true);
    addDataType(type);
    setOpen(false);

    if (!selectedFile) {
      return;
    }

    const { preprocessed_data, categorical_columns, numerical_columns, title } =
      await preprocessingAPI(selectedFile);

    // adding file title
    addFileTitle(title);

    // setting headers
    addHeaders(JSON.parse(numerical_columns), JSON.parse(categorical_columns));

    // setting the data
    addData(JSON.parse(preprocessed_data));

    // setting the loader off
    setLoader(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
  });

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          resolve(event.target.result as string);
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

  const handleDeleteFile = () => {
    deleteFile();
    setUploadState(false);
  };

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "200px",
            width: "50vw",
            border: "dashed #6E7380 2px",
            borderRadius: "15px",
          }}
        >
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#6E7380",
                textAlign: "center",
              }}
            >
              {uploadState ? (
                <>
                  {loader ? (
                    <CircularProgress color="success" />
                  ) : (
                    <CheckCircleIcon
                      color="success"
                      sx={{
                        fontSize: "50px",
                      }}
                    />
                  )}

                  <br />
                  <Typography variant="h6">
                    File Uploaded Successfully
                  </Typography>
                </>
              ) : (
                <>
                  <MdOutlineFileUpload size={50} />
                  <br />
                  Drag and drop your file here
                  <br />
                  Or
                  <br />
                  Click to browse
                </>
              )}
            </Typography>
          </Grid>
        </Grid>
      </div>
      {fileTitle && (
        <List>
          <ListItem
            key={fileTitle}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {fileTitle}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDeleteFile}
            >
              Delete
            </Button>
          </ListItem>
        </List>
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Data Type</DialogTitle>
        <DialogContent>
          <Typography>Is the data numerical or categorical?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleClose("numerical")}
            color="primary"
            variant="contained"
          >
            Numerical
          </Button>
          <Button
            onClick={() => handleClose("categorical")}
            color="primary"
            variant="contained"
          >
            Categorical
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DropZone;
