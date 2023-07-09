import * as React from 'react';
import { Alchemy, Network, Block } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);


export default function BlockInfo(props: { n: number }) {
  const [block, setBlock] = useState<Block | null>();

  useEffect(() => {
    async function getBlock() {
      if (props.n === 0) return;
      setBlock(await alchemy.core.getBlock(props.n));
    }

    getBlock();
  }, [props.n]);


  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Block Number: {block?.number}
        </Typography>
        <Typography variant="body2">
          Hash: {block?.hash}
        </Typography>
        <Typography variant="body2">
          Parent Hash: {block?.parentHash}
        </Typography>
        <Typography variant="body2">
          Timestamp: {block?.timestamp ? new Date(block?.timestamp * 1000).toLocaleString() : ""}
        </Typography>
        <Typography variant="body2">
          Nonce: {Number(block?.nonce)}
        </Typography>
        <Typography variant="body2">
          Miner: {block?.miner}
        </Typography>
        <Typography variant="body2">
          Transactions: {block?.transactions.length}
        </Typography>
        <Typography variant="body2">
          Gas Used: {Number(block?.gasUsed)} ({(Number(block?.gasUsed) / Number(block?.gasLimit) * 100).toFixed(2)}%)
        </Typography>
        <Typography variant="body2">
          Gas Limit: {Number(block?.gasLimit)}
        </Typography>
        <Typography variant="body2">
          Difficulty: {Number(block?._difficulty)}
        </Typography>
      </CardContent>
    </Card>
  );
}