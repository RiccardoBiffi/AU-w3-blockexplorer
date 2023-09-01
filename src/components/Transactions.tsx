import { useTransactions } from '../services';
import TransactionInfo from './TransactionInfo';


export default function Transactions({blockNumber}:{ blockNumber: number }) {
  const transactions = useTransactions(blockNumber);

  const transactionsArray = transactions?.map((t, i) => {
        return (
            <TransactionInfo
                key={i}
                transaction={t} 
            />
        )
    });

  return (
    <>
        {transactionsArray ? transactionsArray : "Loading transactions..."}
    </>
  );
}