import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import TabPanel from "../components/TabPanel";
import AppHeader from "../components/HomeHeader";
import DataTable from "../components/DataTable";

const DataSourcePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "90vh",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", pt: "20px" }}
        >
          <Tab
            label="Dataset"
            {...a11yProps(0)}
          />
          <Tab
            label="Statistics"
            {...a11yProps(1)}
          />
        </Tabs>
        <TabPanel
          value={value}
          index={0}
        >
          <DataTable />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
        >
          statistics
        </TabPanel>
      </Box>
    </>
  );
};

export default DataSourcePage;
