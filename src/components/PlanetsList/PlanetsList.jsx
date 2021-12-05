import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Collapse, Stack } from '@mui/material';

import Planet from './Components/Planet/Planet';
import planetsContext from '../../common/planetsContext';

const PlanetsList = function PlanetsList() {
  const { planets } = React.useContext(planetsContext);

  return planets && planets.length > 0 ? (
    <Stack sx={{ width: 1 }}>
      <TransitionGroup>
        {planets.map((planet) => (
          <Collapse key={planet.name}>
            <Planet key={planet.name} planet={planet} />
          </Collapse>
        ))}
      </TransitionGroup>
    </Stack>
  ) : null;
};

export default PlanetsList;
