import React, { useMemo, useState } from 'react';
import { Box, Container, Grid, useMediaQuery } from '@mui/material';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import planetsContext from '../../common/planetsContext';
import PlanetsList from '../../components/PlanetsList/PlanetsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import starWarsBackgroundLandscape from '../../assets/starwars-planets-bg-landscape.jpg';
import starWarsBackgroundPortrait from '../../assets/starwars-planets-bg-portrait.jpg';

const Home = function Home() {
  const [planets, setPlanets] = useState([]);
  const planetsMemo = useMemo(() => ({ planets, setPlanets }), [planets]);
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundAttachment: 'fixed',
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
          <Footer />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
