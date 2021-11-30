import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

import starWarsLogoGitHub from '../../assets/starwars-planet-icon-github.png';

const Footer = function Footer() {
  return (
    <Grid item sx={{ marginTop: 5 }}>
      <footer>
        <Typography variant="body1" align="center">
          Just a simple React exercise by &nbsp;
          <Link href="https://twitter.com/gabrielizalo">Gabriel Porras</Link> - 2021
          <br />
          <Link href="https://github.com/gabrielizalo/starwars-planets">
            <img alt="StarWars Planets GitHub" src={starWarsLogoGitHub} />
          </Link>
        </Typography>
      </footer>
    </Grid>
  );
};

export default Footer;
