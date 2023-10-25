import { Grid } from "@mui/material";

interface NFTGalleryProps {
  images: string[];
}

export default function NFTGallery({ images }: NFTGalleryProps) {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <img src={image} alt={`NFT ${index}`} />
        </Grid>
      ))}
    </Grid>
  );
}
