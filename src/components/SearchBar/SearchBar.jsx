/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Autocomplete, Box, CircularProgress, Grid, TextField } from '@mui/material';

import createPlanet from '../../common/utils';
import planetsContext from '../../common/planetsContext';

const SearchBar = function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [planetsSearched, setPlanetsSearched] = React.useState([]);
  const { planets, setPlanets } = React.useContext(planetsContext);
  const loading = open && options.length === 0;

  const onChangeHandle = async (value) => {
    const planetsResponse = await fetch(`https://swapi.dev/api/planets?search=${value}`);
    const planetsResponseJson = await planetsResponse.json();
    if (
      planetsResponseJson &&
      planetsResponseJson?.results &&
      planetsResponseJson.results.length > 0
    ) {
      setPlanetsSearched(planetsResponseJson.results);
      setOptions(planetsResponseJson.results.map((planet) => planet.name));
    }
  };

  const onChange = (event, planetSelected) => {
    if (!planetSelected) {
      setPlanetsSearched([]);
      setOptions([]);
      return;
    }

    const newPlanets = createPlanet(planetSelected, planetsSearched, planets);
    setPlanets(newPlanets);
  };

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

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
          autoSelect
          clearOnBlur
          disablePortal
          getOptionLabel={(option) => option}
          id="planets-search"
          isOptionEqualToValue={(option, value) => option === value}
          loading={loading}
          loadingText="Loading..."
          onClose={() => {
            setOpen(false);
          }}
          onChange={onChange}
          onOpen={() => {
            setOpen(true);
          }}
          open={open}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              InputLabelProps={{
                style: { color: '#c5a049' }
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
              label="Search for Star Wars Planets, ex: Alderaan, Tattoine..."
              onChange={(ev) => {
                if (ev.target.value !== '' || ev.target.value !== null) {
                  onChangeHandle(ev.target.value);
                }
              }}
            />
          )}
          selectOnFocus
        />
      </Box>
    </Grid>
  );
};

export default SearchBar;
