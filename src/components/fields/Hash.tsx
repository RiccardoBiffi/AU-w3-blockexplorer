
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';


export function Hash({hash}:{ hash: string | undefined }) {
    const reducedHash = hash?.slice(0, 6) + "..." + hash?.slice(-4);

    const Icon = styled(FontAwesomeIcon)`
        cursor: pointer;
    `

    return (
        <>  
            <span title={hash}>{reducedHash}&nbsp;</span>
            <Icon
                icon={faCopy}
                onClick={(event) => {
                    event.stopPropagation();
                    if(hash)
                        navigator.clipboard.writeText(hash)
                    }
                }
            />
        </>
    )
}