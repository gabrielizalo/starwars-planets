import React from 'react';
import { Grid, Link, Typography } from '@mui/material';

import starWarsLogoGitHub from '../../assets/starwars-planet-icon-github.png';

const Footer = function Footer() {
  const metaAppVersion = document.querySelector('meta[name="app-version"]').content;
  const appVersion = metaAppVersion !== '%APP_VERSION%' ? `v${metaAppVersion}` : 'v#';
  const metaBuildVersion = document.querySelector('meta[name="build-version"]').content;
  const appYear =
    metaBuildVersion !== '%BUILD_VERSION%' ? metaBuildVersion.substring(0, 4) : '2021';

  return (
    <Grid item sx={{ marginTop: 5 }}>
      <footer>
        <Typography variant="body1" align="center">
          A simple project with all the <strong>Must-Have features</strong> I&apos;d like to add to
          any <strong>React</strong> project.
          <br />
          Info about features in &nbsp;
          <Link href="https://github.com/gabrielizalo/starwars-planets">GitHub</Link>. Created by
          &nbsp;
          <Link href="https://twitter.com/gabrielizalo">Gabriel Porras</Link> - {appYear}
          {appVersion && (
            <span>
              {' '}
              -{' '}
              <Link href="https://github.com/gabrielizalo/starwars-planets/releases">
                {appVersion}
              </Link>
            </span>
          )}
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
