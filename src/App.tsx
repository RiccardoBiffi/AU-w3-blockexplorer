import { Network } from 'alchemy-sdk';
import BlockList from './components/BlockList';

import './App.css';

// security The api key is in cleartext, never do this in production
// todo introduce setting only once and user redux to store it
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// You can read more Alchemy SDK here:
// https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  return <BlockList />;
}

export default App;
