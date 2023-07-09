import * as React from 'react';
import { Alchemy, Network, Block } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import BlockInfo from './BlockInfo';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export default function BlockList() {
    const [latestBlock, setlatestBlock] = useState<number | null>();

    useEffect(() => {
        async function getLatestBlock() {
            setlatestBlock(await alchemy.core.getBlockNumber());
        }

        getLatestBlock();
    });

    const blockListArray = new Array(10).fill(0).map((_, i) => {
        const block = latestBlock ? latestBlock - i : 0
        return <BlockInfo n={block} />
    });

    return (
        <div>
            {blockListArray}
        </div>
    );
}