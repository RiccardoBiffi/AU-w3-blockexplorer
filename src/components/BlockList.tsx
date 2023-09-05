import { useState } from 'react';
import BlockInfo from './BlockInfo';
import Transactions from './Transactions';
import { Stack, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function BlockList({latestBlock}: {latestBlock : number | null}) {
    const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

    function handleSelectBlock(n: number) {
        setSelectedBlock(n);
    }

    const blockListArray = new Array(3).fill(0).map((_, i) => {
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

    const Icon = styled(FontAwesomeIcon)``

    return (
        <>
            <Stack direction="row-reverse"
                divider={<Divider><Icon icon={faArrowRight}/></Divider>}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                my={2}
                >
                {blockListArray}
            </Stack>
            {selectedBlock && <Transactions key={selectedBlock} blockNumber={selectedBlock} />}
        </>
    );
}