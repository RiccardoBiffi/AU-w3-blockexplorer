import { TransactionResponse } from 'alchemy-sdk';


export default function TransactionInfo({transaction}:{ transaction: TransactionResponse }) {

  return (
    <>
        Transaction Hash: {transaction.hash}
    </>
  );
}