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
      <BlockList latestBlock={latestBlock} />
    </Container>
    );
}

export default App;
