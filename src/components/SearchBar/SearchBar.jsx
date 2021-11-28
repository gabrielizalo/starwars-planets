import React from 'react';
import { Autocomplete, Box, Grid, TextField, ThemeProvider } from '@mui/material';

import { starWarsTheme } from '../../common/constants';

function SearchBar() {
  // const options = [
  //   { label: 'The Godfather', id: 1 },
  //   { label: 'Pulp Fiction', id: 2 },
  // ];

  return (
    <ThemeProvider theme={starWarsTheme}>
      <Grid item>
        <Box
          sx={{
            bgcolor: 'text.secondary',
            border: '3px solid #C8CACF',
            borderRadius: 5,
            color: 'white',
            display: 'grid',
            p: 2
          }}
        >
          {/*<Autocomplete*/}
          {/*  // disablePortal*/}
          {/*  id="planets-search"*/}
          {/*  freeSolo*/}
          {/*  options={options}*/}
          {/*  // sx={{ width: 300 }}*/}
          {/*  renderInput={(params) => <TextField {...params} label="Movie" />}*/}
          {/*/>*/}
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default SearchBar;
