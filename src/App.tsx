import BlockList from './components/BlockList';
import { useLatestBlock } from './services';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';


import './App.css';
import styled from '@emotion/styled';

// You can read more Alchemy SDK here:
// https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  const [latestBlock, handleRefresh] = useLatestBlock(false);

  const Icon = styled(FontAwesomeIcon)`
    cursor: pointer;
    transform: rotate(-90deg);
    transition: transform 0.5s;

    &:hover {
      transform: rotate(90deg);
  `

  return (
    <Container maxWidth="lg">
      <h1>Ethereum last 3 blocks&nbsp;
        <Icon title="Click to refresh" onClick={handleRefresh} icon={faRefresh}/>
      </h1>
      <p>Click on a block to see its transactions</p>
      <BlockList latestBlock={latestBlock} />
    </Container>
    );
}

export default App;
