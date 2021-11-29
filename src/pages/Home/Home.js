import React, { useMemo, useState } from 'react';
import { Box, Container, Grid, useMediaQuery } from '@mui/material';

import Header from '../../components/Header/Header';
import planetsContext from '../../common/planetsContext';
import PlanetsList from '../../components/PlanetsList/PlanetsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import starWarsBackgroundLandscape from '../../assets/starwars-planets-bg-landscape.jpg';
import starWarsBackgroundPortrait from '../../assets/starwars-planets-bg-portrait.jpg';
import userPlanetsIni from '../../common/constants';

const Home = function Home() {
  const [planets, setPlanets] = useState(userPlanetsIni);
  const planetsMemo = useMemo(() => ({ planets, setPlanets }), [planets]);
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
          <planetsContext.Provider value={planetsMemo}>
            <SearchBar />
            <PlanetsList />
          </planetsContext.Provider>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
