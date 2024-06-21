import { Alert, Box, Grid } from "@mui/material";
import DropZone from "../components/DropZone";
import { useEffect, useState } from "react";

const UploadPage = () => {
  // states
  const [alert, setAlert] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 5000);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Box sx={{ backgroundColor: "#EEEDEB", height: "100vh", width: "100%" }}>
      <Grid
        width="100%"
        container
        sx={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          item
          xs={5}
          display="flex"
          justifyContent="start"
          alignItems="center"
          width="100%"
          height="100%"
          flexDirection="column"
        >
          {alert && (
            <Alert severity="error" sx={{ mt: 8 }}>
              Please Sign into your account, So you can upload your files
            </Alert>
          )}
        </Grid>

        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "column",
            height: "calc(100vh - 120px)", // Adjust height to compensate for the alert height
          }}
        >
          <DropZone />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UploadPage;
