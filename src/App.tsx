import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Latest from "./components/latest/Latest";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={activeTab} onChange={handleChange} centered>
          <Tab label="Latest" />
          <Tab label="Search" />
          <Tab label="NFTs" />
        </Tabs>
      </Box>
      <TabPanel value={activeTab} index={0}>
        <Latest />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        Search component
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        NFT gallery component
      </TabPanel>
    </Container>
  );
}

export default App;
