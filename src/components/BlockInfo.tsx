import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { useBlock } from '../services';
import { Hash } from './fields/Hash';


export default function BlockInfo(
  {n, onSelectBlock, isSelected} :
  { n: number,
    onSelectBlock: Function, 
    isSelected: boolean 
  }) {
  const block = useBlock(n);

  function handleSelectedBlock(n: number) {
    if (!isSelected) {
      onSelectBlock(n);
    }
  }

  const BlockCard = styled(Card)`
    margin: 16px;
    &:hover {
      box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
    }
  `

  const BlockCardContent = styled(CardContent)`
    padding: 32px;
    background-color: ${() => (isSelected ? '#DDDDDD' : '#EEEEEE')};
    font-size: 24px;
    border-radius: 4px;
    color: black;

  `

  return (
    <>
      <BlockCard 
        sx={{ maxWidth: 350 }} 
        raised={isSelected}
        onClick={() => handleSelectedBlock(n)}
        >
        <BlockCardContent>
          <Typography variant="h5" component="div">
            Block {block?.number}
          </Typography>
          <Typography variant="body2">
            Hash <Hash hash={block?.hash}/>
          </Typography>
          <Typography variant="body2">
            Parent Hash <Hash hash={block?.parentHash}/>
          </Typography>
          <Typography variant="body2">
            Timestamp: {block?.timestamp ? new Date(block?.timestamp * 1000).toLocaleString() : ""}
          </Typography>
          <Typography variant="body2">
            Miner <Hash hash={block?.miner} />
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
        </BlockCardContent>
      </BlockCard>
    </>
  );
}