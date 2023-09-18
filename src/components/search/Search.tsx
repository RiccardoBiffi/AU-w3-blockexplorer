import { TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  let searchItem = !isNaN(Number(search)) ? "number" : "string";
  let isError = false;

  return (
    <Grid2 container>
      <Grid2 xs={8} xsOffset={2}>
        <TextField
          id="outlined-search"
          label="🔍 Search anything"
          type="search"
          placeholder="Block number, transaction hash, address, etc."
          helperText={
            search
              ? `I'm looking for a ${searchItem}...`
              : "I'll show you help here"
          }
          fullWidth
          value={search}
          error={isError}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </Grid2>

      <Grid2 xs={8} xsOffset={2}>
        <p style={{ textAlign: "center" }}>Search term: {search}</p>
      </Grid2>
    </Grid2>
  );
}
