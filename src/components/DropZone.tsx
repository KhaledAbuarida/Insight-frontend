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

const DropZone = () => {
  const [uploadState, setUploadState] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { addHeaders, addData, file, addDataType, uploadFile, deleteFile } =
    useData();

  async function convertCsvFileToJson(file: File, type: string) {
    try {
      setUploadState(true);

      if (file.type !== "text/csv") {
        throw new Error("Only CSV files are allowed");
      }

      const csvString: string = await readFileAsText(file);
      let jsonArray = await csvtojson().fromString(csvString);

      jsonArray = jsonArray.map((data: any) => {
        const newData: any = {};
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            newData[key.toLowerCase()] = data[key];
          }
        }
        return newData;
      });

      if (!jsonArray[0].hasOwnProperty("id")) {
        jsonArray = jsonArray.map((data: any, index: number) => ({
          id: index + 1,
          ...data,
        }));
      }

      addHeaders(Object.keys(jsonArray[0]));
      addData(jsonArray);

      uploadFile(file);
      handleUploadState();
    } catch (error) {
      console.error("Error converting CSV file to JSON:", error);
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
      setOpen(true);
    }
  }, []);

  const handleClose = (type: string) => {
    addDataType(type);
    setOpen(false);
    if (selectedFile) {
      convertCsvFileToJson(selectedFile, type);
    }
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

  const handleUploadState = () => {
    setLoader(false);
    setTimeout(() => {
      // navigate("/dataset");
    }, 1000);
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
      {file && (
        <List>
          <ListItem
            key={file.path}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {file.path}
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
