import React from 'react';
import { Stack } from '@mui/material';

import Planet from './Components/Planet/Planet';
import planetsContext from '../../common/planetsContext';

const PlanetsList = function PlanetsList() {
  const { planets } = React.useContext(planetsContext);

  return planets && planets.length > 0 ? (
    <Stack spacing={2} sx={{ width: 1 }}>
      {planets.map((planet) => (
        <Planet key={planet.id} planet={planet} />
      ))}
    </Stack>
  ) : null;
};

export default PlanetsList;
