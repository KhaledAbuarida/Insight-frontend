import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import csvtojson from "csvtojson";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { MdOutlineFileUpload } from "react-icons/md";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext/DataContext";

const DropZone = () => {
  const [uploadState, setUploadState] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const navigate = useNavigate();
  const { data, headers, addHeaders, addData } = useData();

  async function convertCsvFilesToJson(files: File[]): Promise<void> {
    try {
      setUploadState(true);

      const csvFiles = files.filter((file: any) => file.type === "text/csv");

      const jsonArrayPromises = csvFiles.map(async (csvFile) => {
        const csvString: string = await readFileAsText(csvFile);
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
      });

      await Promise.all(jsonArrayPromises);
      handleUploadState();
    } catch (error) {
      console.error("Error converting CSV files to JSON:", error);
    }
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      await convertCsvFilesToJson(acceptedFiles);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
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
    // setUploadState(true);
    setLoader(false);

    // Navigating to /dataset
    setTimeout(() => {
      navigate("/dataset");
    }, 1000);
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
      {/* <div>
        <h2>Converted JSON Data</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>
        <h2>CSV Headers</h2>
        <pre>{JSON.stringify(headers, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default DropZone;
