import { Grid } from "@mui/material";
import DropZone from "../components/DropZone";

const UploadPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="calc(100vh)"
      bgcolor="#EEEDEB"
    >
      <DropZone />
    </Grid>
  );
};

export default UploadPage;
