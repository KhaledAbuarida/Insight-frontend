import { Container, Typography, Grid } from "@mui/material";
import Upload from "../../components/upload/Upload";
import DropZone from "../../components/DropZone";

const UploadPage = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "85vh" }}
      >
        <Grid item>
          <Typography variant="h3">
            <b>CSV Visualizer</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            color="#6E7380"
            mb={4}
          >
            Upload your CSV file to generate interactive charts and graphs
          </Typography>
        </Grid>
        <Grid item>
          <DropZone />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadPage;
