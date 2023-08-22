import BlockList from './components/BlockList';
import { useLatestBlock } from './services';


import './App.css';

// You can read more Alchemy SDK here:
// https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  const latestBlock = useLatestBlock();

  return (
      <BlockList latestBlock={latestBlock} />
    );
}

export default App;
