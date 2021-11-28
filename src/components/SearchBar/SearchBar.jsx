/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Autocomplete, Box, Grid, TextField } from '@mui/material';

const SearchBar = function SearchBar() {
  return (
    <Grid item sx={{ paddingBottom: 3, width: 1 }}>
      <Box
        sx={{
          bgcolor: '#fff',
          border: '2px solid #C8CACF',
          borderRadius: 5,
          color: 'white',
          p: 2
        }}
      >
        <Autocomplete
          disablePortal
          id="planets-search"
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              InputLabelProps={{
                style: { color: '#c5a049' }
              }}
              label="Search for Star Wars Planets, ex: Alderaan, Tattoine..."
            />
          )}
          selectOnFocus
        />
      </Box>
    </Grid>
  );
};

export default SearchBar;
