import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';

import iconClimate from '../../../../assets/starwars-planet-icon-climate.png';
import iconDiameter from '../../../../assets/starwars-planet-icon-diamater.png';
import iconPopulation from '../../../../assets/starwars-planet-icon-population.png';
import iconTerrain from '../../../../assets/starwars-planet-icon-terrain.png';
import planetsContext from '../../../../common/planetsContext';

const Planet = function Planet({ planet }) {
  const styles = {
    bg: {
      backgroundImage: `url(${process.env.PUBLIC_URL}${planet.img})`,
      backgroundPosition: 'right top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 100%'
    }
  };
  const { planets, setPlanets } = React.useContext(planetsContext);

  const handleDeleteClick = () => {
    const newPlanets = planets.filter((planetFromList) => planetFromList.name !== planet.name);
    setPlanets(newPlanets);
  };

  return (
    <Grid item>
      <Card
        display="inline-block"
        style={styles.bg}
        sx={{ borderRadius: 3, border: 2, borderColor: 'grey.500', marginBottom: 2 }}
      >
        <CardContent>
          <Button
            color="error"
            onClick={handleDeleteClick}
            size="small"
            sx={{ float: 'right' }}
            variant="contained"
          >
            Delete
          </Button>
          <Typography gutterBottom variant="h4" style={{ color: '#c5a049' }}>
            {planet.name}
          </Typography>
          <Typography color="text.secondary">
            <img alt="" src={iconDiameter} />
            &nbsp;
            <strong>Diameter:</strong> {planet.diameter}
          </Typography>
          <Typography color="text.secondary">
            <img alt="" src={iconPopulation} />
            &nbsp;
            <strong>Population:</strong> {planet.population}
          </Typography>
          <Typography color="text.secondary">
            <img alt="" src={iconClimate} />
            &nbsp;
            <strong>Climate:</strong> {planet.climate}
          </Typography>
          <Typography color="text.secondary">
            <img alt="" src={iconTerrain} />
            &nbsp;
            <strong>Terrain:</strong> {planet.terrain}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

Planet.propTypes = {
  planet: PropTypes.exact({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired
  }).isRequired
};

export default Planet;
