import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Nft } from "alchemy-sdk";

export default function NFTDetails({
  nft,
  onModalCLose,
}: {
  nft: Nft;
  onModalCLose: () => void;
}) {
  const handleClose = () => {
    onModalCLose();
  };
  const dialogContent = [
    `Contract: ${nft.contract.name} (${nft.contract.symbol})`,
    `Token ID: ${nft.tokenId}`,
    `Description: ${nft.description}`,
  ];

  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={true}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{nft.title}</DialogTitle>
      <img src={nft.media[0]?.gateway} alt={nft.contract.name} />
      <DialogContent>
        {dialogContent.map((line, i) => (
          <DialogContentText key={i}>{line}</DialogContentText>
        ))}
      </DialogContent>
    </Dialog>
  );
}
