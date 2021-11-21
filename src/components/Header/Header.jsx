import React from 'react';
import { useMediaQuery } from '@mui/material';

import starWarsLogoLandscape from '../../assets/starwars-planets-header-landscape.png';
import starWarsLogoPortrait from '../../assets/starwars-planets-header-portrait.png';

function Header () {
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return (
    <header>
      <img
        src={isPortrait ? starWarsLogoPortrait : starWarsLogoLandscape}
        alt="StarWars Planets"
        width='100%'
      />
    </header>
  );
}

export default Header;
