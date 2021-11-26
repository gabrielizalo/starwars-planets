import React from 'react';
import { Box, Container, Grid, ThemeProvider, useMediaQuery } from '@mui/material';

import Header from '../../components/Header/Header';
import starWarsBackgroundLandscape from '../../assets/starwars-planets-bg-landscape.jpg';
import starWarsBackgroundPortrait from '../../assets/starwars-planets-bg-portrait.jpg';
import { starWarsTheme } from '../../common/constants';

function Home() {
  const isPortrait = useMediaQuery('(orientation: portrait)');

  return (
    <ThemeProvider theme={starWarsTheme}>
      <Box
        height="100vh"
        sx={{
          backgroundImage: `url(${
            isPortrait ? starWarsBackgroundPortrait : starWarsBackgroundLandscape
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          bgcolor: 'background.paper'
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
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
