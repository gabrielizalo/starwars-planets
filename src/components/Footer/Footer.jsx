import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

import starWarsLogoGitHub from '../../assets/starwars-planet-icon-github.png';

const Footer = function Footer() {
  const metaAppVersion = document.querySelector('meta[name="app-version"]').content;
  const appVersion = metaAppVersion !== '%APP_VERSION%' ? `v${metaAppVersion}` : '';
  const metaBuildVersion = document.querySelector('meta[name="build-version"]').content;
  const appYear =
    metaBuildVersion !== '%BUILD_VERSION%' ? metaBuildVersion.substring(0, 4) : '2021';

  return (
    <Grid item sx={{ marginTop: 5 }}>
      <footer>
        <Typography variant="body1" align="center">
          Just a simple React exercise by &nbsp;
          <Link href="https://twitter.com/gabrielizalo">Gabriel Porras</Link> - {appYear}
          {appVersion && <span> - {appVersion}</span>}
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
