import React from 'react';

const planetsContext = React.createContext({
  planets: [],
  setPlanets: () => []
});

export default planetsContext;
