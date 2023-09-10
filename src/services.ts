import { useContext, useEffect, useState } from 'react';
import { Alchemy, Block, TransactionResponse } from 'alchemy-sdk';
import { AlchemySettings } from './contexts/AlchemySettings';


export function useLatestBlock(isRefresh: boolean) : [number | null, () => void] {
    const {apiKey, network} = useContext(AlchemySettings);
    const [lastBlockNumber, setLastBlockNumber] = useState<number | null>(null);
    const [refresh, setRefresh] = useState<boolean>(isRefresh);

    function handleRefresh() {
        setRefresh(!refresh);
    }

    useEffect(() => {   
        const alchemy = new Alchemy({apiKey, network});
        async function getBlock() {
            setLastBlockNumber(await alchemy.core.getBlockNumber());
        }
      
        getBlock();
    }, [apiKey, network, refresh]);

    return [lastBlockNumber, handleRefresh];
}

export function useBlock(blockNumber: number) : Block | null {
    const {apiKey, network} = useContext(AlchemySettings);
    const [block, setBlock] = useState<Block | null>(null);

    useEffect(() => {
        const alchemy = new Alchemy({apiKey, network});
        async function getBlock() {
            if (blockNumber === 0) return;
            setBlock(await alchemy.core.getBlock(blockNumber));
        }
      
        getBlock();
    }, [blockNumber, apiKey, network]);

    return block;
}

export function useTransactions(blockNumber: number) : TransactionResponse[] | null {
    const {apiKey, network} = useContext(AlchemySettings);
    const [transactions, setTransactions] = useState<TransactionResponse[] | null>(null);

    useEffect(() => {
        const alchemy = new Alchemy({apiKey, network});
        async function getTransactions() {
            setTransactions((await alchemy.core.getBlockWithTransactions(blockNumber)).transactions);
        }
      
        getTransactions();
    }, [blockNumber, apiKey, network]);

    return transactions;
}