import { Grid } from "@mui/material";
import DropZone from "../components/DropZone";

const UploadPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="85vh"
    >
      <DropZone />
    </Grid>
  );
};

export default UploadPage;
