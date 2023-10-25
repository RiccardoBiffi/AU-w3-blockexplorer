import { useState } from "react";
import { Switch, TextField } from "@mui/material";

export default function SearchNFTs() {
  const [searchValue, setSearchValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <TextField
        label="Search NFTs"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Switch
        checked={checked}
        onChange={handleSwitchChange}
        inputProps={{ "aria-label": "search only in favorites" }}
      />
    </div>
  );
}
