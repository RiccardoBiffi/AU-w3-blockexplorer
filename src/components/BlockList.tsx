import { useState } from 'react';
import BlockInfo from './BlockInfo';
import Transactions from './Transactions';


export default function BlockList({latestBlock}: {latestBlock : number | null}) {
    const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

    function handleSelectBlock(n: number) {
        setSelectedBlock(n);
    }

    const blockListArray = new Array(10).fill(0).map((_, i) => {
        const block = latestBlock ? latestBlock - i : 0
        return (
            <BlockInfo
                key={i}
                n={block} 
                onSelectBlock={handleSelectBlock}
                isSelected={selectedBlock === block}
            />
        )
    });

    return (
        <>
            {blockListArray}
            {selectedBlock && <Transactions blockNumber={selectedBlock} />}
        </>
    );
}