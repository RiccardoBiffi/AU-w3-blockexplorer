import BlockList from './components/BlockList';
import { useLatestBlock } from './services';
import { Container } from '@mui/material';


import './App.css';

// You can read more Alchemy SDK here:
// https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  const latestBlock = useLatestBlock();

  return (
    <Container maxWidth="lg">
      <h1>Ethereum last 3 blocks</h1> {/*todo add refresh button*/}
      <p>Click on a block to see its transactions</p>
      <BlockList latestBlock={latestBlock} />
    </Container>
    );
}

export default App;
