import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { useData } from "../../contexts/DataContext/DataContext";

const CategoricalData: React.FC = () => {
  const { categoricalStat } = useData();

  return (
    <Paper
      style={{
        padding: "16px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {Object.keys(categoricalStat).map((key: string) => (
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
            {categoricalStat[key].map((value: string, index: number) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    style={{ fontWeight: "bold", marginRight: "8px" }}
                  >
                    {index + 1}:
                  </Typography>
                  <Typography variant="body2">{value}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Paper>
  );
};

export default CategoricalData;
