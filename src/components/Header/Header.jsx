import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';

import starWarsLogoLandscape from '../../assets/starwars-planets-header-landscape.png';
import starWarsLogoPortrait from '../../assets/starwars-planets-header-portrait.png';

const Header = function Header() {
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return (
    <Grid item sx={{ marginBottom: 2 }}>
      <header>
        <img
          alt="StarWars Planets"
          src={isPortrait ? starWarsLogoPortrait : starWarsLogoLandscape}
          width="100%"
        />
      </header>
    </Grid>
  );
};

export default Header;
