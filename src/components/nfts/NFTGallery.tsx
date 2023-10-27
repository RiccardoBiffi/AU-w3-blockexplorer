import { Grid, Skeleton } from "@mui/material";
import { useNFTs } from "../../services";

interface NFTGalleryProps {
  address: string;
  type: string;
}

export default function NFTGallery({ address, type }: NFTGalleryProps) {
  const nfts = useNFTs(address, type);

  return (
    <>
      {!nfts ? (
        <Skeleton variant="rounded" height={369} sx={{ width: "100%" }} />
      ) : nfts.length > 0 ? (
        <Grid container spacing={2}>
          {nfts.map((nft, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <img src={nft.media[0]?.thumbnail} alt={`NFT ${index}`} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h3>No NFTs found</h3>
      )}
    </>
  );
}
