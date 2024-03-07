import React, { useState } from "react";
import Sheet from "./Sheet";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Graph from "./Graph";
import VisualizePage from "../pages/VisualizePage";

const Spreadsheet: React.FC = () => {
  const [sheets, setSheets] = useState<{ name: string; isOpen: boolean }[]>([
    { name: "Sheet 1", isOpen: false },
    { name: "Sheet 2", isOpen: false },
    { name: "Sheet 3", isOpen: false },
  ]);
  const [currentSheet, setCurrentSheet] = useState<string | null>(null);

  const addSheet = () => {
    const newSheetName = `Sheet ${sheets.length + 1}`;
    setSheets([...sheets, { name: newSheetName, isOpen: false }]);
  };

  const renameSheet = (oldName: string, newName: string) => {
    const updatedSheets = sheets.map((sheet) =>
      sheet.name === oldName ? { ...sheet, name: newName } : sheet
    );
    setSheets(updatedSheets);
  };

  const removeSheet = (name: string) => {
    const updatedSheets = sheets.filter((sheet) => sheet.name !== name);
    setSheets(updatedSheets);
  };

  const openSheet = (name: string) => {
    setCurrentSheet(name);
    const updatedSheets = sheets.map((sheet) => ({
      ...sheet,
      isOpen: sheet.name === name,
    }));
    setSheets(updatedSheets);
  };

  return (
    <>
      <Box>
        <VisualizePage />
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          // height: "100%",
          backgroundColor: "#e5e5e5",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container>
          {sheets.map((sheet, index) => (
            <Grid
              item
              sx={{
                p: 1,
                border: "1px solid gray",
              }}
            >
              <Sheet
                key={index}
                name={sheet.name}
                isOpen={sheet.isOpen}
                renameSheet={renameSheet}
                removeSheet={removeSheet}
                openSheet={() => openSheet(sheet.name)}
              />
            </Grid>
          ))}
          <Button onClick={addSheet}>
            <Typography
              variant="h5"
              color="gray"
            >
              <b> + </b>
            </Typography>
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Spreadsheet;
