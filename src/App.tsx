import BlockList from './components/BlockList';
import { useLatestBlock } from './services';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';


import './App.css';
import styled from '@emotion/styled';

// You can read more Alchemy SDK here:
// https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  const [latestBlock, handleRefresh] = useLatestBlock(false);
  const blockNumber = 10;

  const Icon = styled(FontAwesomeIcon)`
    cursor: pointer;
    transform: rotate(-90deg);
    transition: transform 0.5s;

    &:hover {
      transform: rotate(90deg);
  `

  return (
    <Container maxWidth="lg">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example" centered>
          <Tab label="Latest" />
          <Tab label="Search" />
          <Tab label="NFTs" />
        </Tabs>
      </Box>
      <h1>Ethereum last {blockNumber} blocks&nbsp;
        <Icon title="Click to refresh" onClick={handleRefresh} icon={faRefresh}/>
      </h1>
      <p>Click on a block to see its transactions</p>
      <BlockList latestBlock={latestBlock} number={blockNumber} />
    </Container>
    );
}

export default App;
