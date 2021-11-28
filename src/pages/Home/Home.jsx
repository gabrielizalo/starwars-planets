import React from 'react';
import { Box, Container, Grid, useMediaQuery } from '@mui/material';

import Header from '../../components/Header/Header';
import PlanetsList from '../../components/PlanetsList/PlanetsList';
import starWarsBackgroundLandscape from '../../assets/starwars-planets-bg-landscape.jpg';
import starWarsBackgroundPortrait from '../../assets/starwars-planets-bg-portrait.jpg';

function Home() {
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return (
    <Box
      height="100vh"
      sx={{
        backgroundAttachment: 'scroll',
        backgroundImage: `url(${
          isPortrait ? starWarsBackgroundPortrait : starWarsBackgroundLandscape
        })`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container maxWidth="md">
        <Grid
          alignItems="center"
          container
          direction="column"
          justifyContent="center"
          sx={{
            p: 2
          }}
        >
          <Header />
          <PlanetsList />
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
