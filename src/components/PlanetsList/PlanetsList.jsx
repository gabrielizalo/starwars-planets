import React from 'react';
import { Stack } from '@mui/material';

import Planet from './Components/Planet/Planet';

const PlanetsList = function PlanetsList() {
  const planet1 = {
    id: 1,
    name: 'Tatooine',
    img: '/assets/planet-tatooine.jpg',
    diameter: '10.465 KM',
    population: '200 Thousands',
    climate: 'Arid',
    terrain: 'Desert'
  };
  const planet2 = {
    id: 2,
    name: 'Alderaan',
    img: '/assets/planet-alderaan.jpg',
    diameter: '12.500 KM',
    population: '2.000 Millions',
    climate: 'Temperate',
    terrain: 'Grasslands, Mountains'
  };

  return (
    <Stack spacing={2} sx={{ width: 1 }}>
      <Planet planet={planet1} />
      <Planet planet={planet2} />
    </Stack>
  );
};

export default PlanetsList;
