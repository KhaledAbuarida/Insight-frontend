import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { useData } from "../../contexts/DataContext/DataContext";

const NumericalData: React.FC = () => {
  const { numericalStat } = useData();

  return (
    <Paper
      style={{
        padding: "16px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {Object.keys(numericalStat).map((key: string) => (
        <Box key={key} mb={2}>
          <Typography
            variant="h6"
            style={{ color: "#333", marginBottom: "8px" }}
          >
            <Typography variant="h4" color="green">
              {key}
            </Typography>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Average:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{numericalStat[key].Average}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Min:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{numericalStat[key].Min}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Max:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{numericalStat[key].Max}</Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Paper>
  );
};

export default NumericalData;
