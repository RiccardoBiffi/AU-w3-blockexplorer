//import { Grid } from "@mui/material";

interface NFTGalleryProps {
  address: string;
  type: string;
}

export default function NFTGallery({ address, type }: NFTGalleryProps) {
  return (
    <p>
      Searching NFTs of {type} {address}
    </p>
    // <Grid container spacing={2}>
    //   {/* {images.map((image, index) => (
    //     <Grid item xs={12} sm={6} md={4} key={index}>
    //       <img src={image} alt={`NFT ${index}`} />
    //     </Grid>
    //   ))} */}
    // </Grid>
  );
}
