import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import csvtojson from "csvtojson";
import { Box, Grid, Typography } from "@mui/material";

interface CSVData {
  [key: string]: string;
}

const DropZone = () => {
  const [jsonData, setJsonData] = useState<CSVData[]>();

  const onDrop = useCallback(async (acceptedFiles: any) => {
    // Filter out non-CSV files
    const csvFiles = acceptedFiles.filter(
      (file: any) => file.type === "text/csv"
    );

    // Do something with the CSV files
    const csvString: string = await readFileAsText(csvFiles[0]);
    const jsonArray: CSVData[] = await csvtojson().fromString(csvString);
    setJsonData(jsonArray);
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

  return (
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
            Drag and drop your file here
            <br />
            Or
            <br />
            Click to browse
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DropZone;
