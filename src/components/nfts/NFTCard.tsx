import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Nft } from "alchemy-sdk";
import { useState } from "react";
import NFTDetails from "./NFTDetails";

export default function NFTCard({ nft }: { nft: Nft }) {
  const [open, setOpen] = useState(false);

  const NftCard = styled(Card)`
    cursor: pointer;
    text-align: center;

    &:hover {
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
        0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
  `;

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <NftCard>
        <CardMedia
          component="img"
          height="auto"
          image={nft.media[0]?.thumbnail}
          alt={nft.contract.name + " " + nft.tokenId}
          onClick={() => handleClick()}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nft.contract.name + " #" + nft.tokenId}
          </Typography>
          {nft.description && (
            <Typography variant="body2" color="text.secondary">
              {nft.description}
            </Typography>
          )}
        </CardContent>
      </NftCard>
      {open && <NFTDetails nft={nft} onModalCLose={() => setOpen(false)} />}
    </>
  );
}
