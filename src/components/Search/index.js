import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const Search = React.forwardRef(({ handleSearch }, ref) => (
  <>
    <Grid container spacing={3}>
      <Grid item lg={12} container direction="row" justify="center">
        <TextField
          inputRef={ref}
          onChange={handleSearch}
          style={{ width: "50%" }}
          id="standard-search"
          label="Pesquisar usuário"
          type="search"
        />
      </Grid>
    </Grid>
  </>
));

export default Search;
