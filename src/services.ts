import { useContext, useEffect, useState } from 'react';
import { Alchemy, Block, TransactionResponse } from 'alchemy-sdk';
import { AlchemySettings } from './contexts/AlchemySettings';

export function useBlock(blockNumber: number) : Block | null {
    const settings = useContext(AlchemySettings);
    const [block, setBlock] = useState<Block | null>(null);

    useEffect(() => {
        const alchemy = new Alchemy(settings);
        async function getBlock() {
            if (blockNumber === 0) return;
            setBlock(await alchemy.core.getBlock(blockNumber));
        }
      
        getBlock();
    }, [blockNumber, settings]);

    return block;
}

export function useLatestBlock() : number | null {
    const {apiKey, network} = useContext(AlchemySettings);
    const [lastBlockNumber, setLastBlockNumber] = useState<number | null>(null);

    useEffect(() => {   
        const alchemy = new Alchemy({apiKey, network});
        async function getBlock() {
            setLastBlockNumber(await alchemy.core.getBlockNumber());
        }
      
        getBlock();
    }, [apiKey, network]);

    return lastBlockNumber;
}

export function useTransactions(blockNumber: number) : TransactionResponse[] | null {
    const settings = useContext(AlchemySettings);
    const [transactions, setTransactions] = useState<TransactionResponse[] | null>(null);

    useEffect(() => {
        const alchemy = new Alchemy(settings);
        async function getTransactions() {
            setTransactions((await alchemy.core.getBlockWithTransactions(blockNumber)).transactions);
        }
      
        getTransactions();
    }, [blockNumber, settings]);

    return transactions;
}