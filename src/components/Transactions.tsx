import { Utils } from 'alchemy-sdk';
import { useTransactions } from '../services';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';


export default function Transactions({blockNumber}:{ blockNumber: number }) {
  const transactions = useTransactions(blockNumber);
  //todo get eth - eur price from somewhere onchain and add on the table

  const rows : GridRowsProp = transactions?.map((t, i) => {
    const gasPrice = t.gasPrice ? t.gasPrice.toBigInt() : BigInt(0);
    const gasFee = t.gasLimit.toBigInt() * gasPrice;

      return {
        id: t.hash,
        hash: t.hash,
        from: t.from,
        to: t.to,
        value: Utils.formatEther(t.value.toString()).substring(0,7) + " ETH",
        fee: Utils.formatEther(gasFee).substring(0,7) + " ETH",
        gas: t.gasLimit,
        gasPrice: t.gasPrice + " wei",
        nonce: t.nonce
      }
    }) as GridRowsProp;

    //todo fix the width of the columns
  const columns : GridColDef[] = [
    { field: 'from', headerName: 'From', width: 150 },
    { field: 'to', headerName: 'To', width: 150 },
    { field: 'value', headerName: 'Value sent', width: 250 },
    { field: 'fee', headerName: 'Fee', width: 250 },
  ];

  return (
    <>
      {rows ? // todo open modal on row click with transaction details
        <DataGrid
          rows={rows}
          columns={columns} 
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
        /> :
        "Loading transactions..."
      }
    </>
  );
}