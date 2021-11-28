import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';

import iconClimate from '../../../../assets/starwars-planet-icon-climate.png';
import iconDiameter from '../../../../assets/starwars-planet-icon-diamater.png';
import iconPopulation from '../../../../assets/starwars-planet-icon-population.png';
import iconTerrain from '../../../../assets/starwars-planet-icon-terrain.png';

const Planet = function Planet({ planet }) {
  const styles = {
    bg: {
      backgroundImage: `url(${process.env.PUBLIC_URL}${planet.img})`
    }
  };

  return (
    <Grid item>
      <Card
        display="inline-block"
        style={styles.bg}
        sx={{ borderRadius: 3, border: 2, borderColor: 'grey.500' }}
      >
        <CardActionArea>
          <CardContent>
            <Button color="error" size="small" sx={{ float: 'right' }} variant="contained">
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
        </CardActionArea>
      </Card>
    </Grid>
  );
};

Planet.propTypes = {
  planet: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired
  }).isRequired
};

export default Planet;
