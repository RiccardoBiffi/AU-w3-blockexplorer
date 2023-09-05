import { Utils } from 'alchemy-sdk';
import { useTransactions } from '../services';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';


export default function Transactions({blockNumber}:{ blockNumber: number }) {
  const transactions = useTransactions(blockNumber);

  const rows : GridRowsProp = transactions?.map((t, i) => {
      return {
        id: t.hash,
        hash: t.hash,
        status: t.timestamp ? "Mined" : "Pending",
        from: t.from,
        to: t.to,
        value: Utils.formatEther(t.value.toString()) + " ETH",
        gas: t.gasLimit,
        gasPrice: t.gasPrice + " wei",
        nonce: t.nonce
      }
    }) as GridRowsProp;

  const columns : GridColDef[] = [
    { field: 'hash', headerName: 'Hash', width: 150 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'from', headerName: 'From', width:  150 },
    { field: 'to', headerName: 'To', width: 150 },
    { field: 'value', headerName: 'Value sent', width: 250 },
    { field: 'gas', headerName: 'Gas', width: 100 },
    { field: 'gasPrice', headerName: 'Gas Price', width: 200 },
    { field: 'nonce', headerName: 'Nonce', width: 100 },
  ];

  return (
    <>
      {rows ?
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