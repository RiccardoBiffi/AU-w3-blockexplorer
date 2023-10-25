import { SetStateAction, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";

export default function SearchNFTs() {
  const [searchAddress, setSearchAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [radioValue, setRadioValue] = useState<string | null>(null);
  const addressRex = new RegExp("^0x[a-fA-F0-9]{40}$");
  let isError = !addressRex.test(selectedAddress);

  const handleChange = (event: {
    target: { value: SetStateAction<string | null> };
  }) => {
    setRadioValue(event.target.value);
  };

  return (
    <Stack direction={"column"} alignItems={"center"} spacing={2}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Search NFTs by
        </FormLabel>
        <RadioGroup
          defaultValue="collection"
          value={radioValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="collection"
            control={<Radio />}
            label="NFT collection address"
          />
          <FormControlLabel
            value="owner"
            control={<Radio />}
            label="Owner address"
          />
        </RadioGroup>
      </FormControl>
      <TextField
        id="outlined-search"
        label="🖼️ Search NFTs"
        type="search"
        placeholder={
          radioValue === "collection" ? "Collection address" : "Owner address"
        }
        helperText={
          isError
            ? "Unknown search term, are you sure you have copied the the whole address?"
            : radioValue === "collection"
            ? "The address of the NFT collection"
            : "The address of which you want to see the NFTs"
        }
        fullWidth
        value={searchAddress}
        error={isError}
        onChange={(event) => {
          setSearchAddress(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key !== "Enter") return;
          setSelectedAddress(searchAddress);
        }}
        sx={{ maxWidth: 636 }}
      />
    </Stack>
  );
}
