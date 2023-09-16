import { useContext, useEffect, useState } from 'react';
import { Alchemy, Block, TransactionResponse } from 'alchemy-sdk';
import { AlchemySettings } from './contexts/AlchemySettings';
import { BlockContext } from './contexts/BlockContext';
import { TransactionContext } from './contexts/TransactionContext';


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
    const blockMap = useContext(BlockContext);
    const transactionContext = useContext(TransactionContext);
    const [block, setBlock] = useState<Block | null>(null);

    useEffect(() => {
        const alchemy = new Alchemy({apiKey, network});
        async function getBlock() {
            if (blockNumber === 0) return;
            if (blockMap.has(blockNumber))
                return setBlock(blockMap.get(blockNumber) as Block);

            const fetchedBlock = await alchemy.core.getBlock(blockNumber);
            blockMap.set(blockNumber, fetchedBlock);
            if(blockMap.size > 10) {
                const keyArray = Array.from(blockMap.keys());
                const keyToDelete = keyArray.sort((a, b) => a - b)[0];
                blockMap.delete(keyToDelete);
                transactionContext.delete(keyToDelete);
            }
            setBlock(fetchedBlock);
        }
      
        getBlock();
    }, [blockNumber, apiKey, network, blockMap, transactionContext]);

    return block;
}

export function useTransactions(blockNumber: number) : TransactionResponse[] | null {
    const {apiKey, network} = useContext(AlchemySettings);
    const transactionContext = useContext(TransactionContext);
    const [transactions, setTransactions] = useState<TransactionResponse[] | null>(null);

    useEffect(() => {
        const alchemy = new Alchemy({apiKey, network});
        async function getTransactions() {
            if (blockNumber === 0) return;
            if (transactionContext.has(blockNumber))
                return setTransactions(transactionContext.get(blockNumber) as TransactionResponse[]);
            
            const fetchedTransactions = (await alchemy.core.getBlockWithTransactions(blockNumber)).transactions;
            transactionContext.set(blockNumber, fetchedTransactions);
            setTransactions(fetchedTransactions);
        }
      
        getTransactions();
    }, [blockNumber, apiKey, network, transactionContext]);

    return transactions;
}

export function usePriceFeed(ticker: string) : number | null {
    const {apiKey, network} = useContext(AlchemySettings);
    const [price, setPrice] = useState<number | null>(null);

    // todo eth price in eur from chainlink
    // eth/usd 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
    // eur/usd 0xb49f677943BC038e9857d61E7d053CaA2C1734C1
    // eth/eur = eth/usd / eur/usd

    useEffect(() => {
        //const alchemy = new Alchemy({apiKey, network});
        async function getPrice() {
            setPrice(0);
        }
      
        getPrice();
    }, [ticker, apiKey, network]);

    return price;
}