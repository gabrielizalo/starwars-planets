function setPlanetPopulation(num, digits) {
  /* By Salman A in https://stackoverflow.com/a/9462382/334963 */
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: ' thousands' },
    { value: 1e6, symbol: ' millions' },
    { value: 1e9, symbol: ' billions' },
    { value: 1e12, symbol: ' trillions' },
    { value: 1e15, symbol: ' quadrillions' },
    { value: 1e18, symbol: ' quintillions' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const myNumber = lookup
    .slice()
    .reverse()
    .find(function findNum(item) {
      return num >= item.value;
    });
  return myNumber ? (num / myNumber.value).toFixed(digits).replace(rx, '1') + myNumber.symbol : '0';
}

const setWordsAsTitles = (stringList) => {
  return stringList
    .split(',')
    .map((word) => word.trim().charAt(0).toUpperCase() + word.trim().slice(1))
    .join(', ');
};

const setPlanetImage = (planetName) => {
  return `/assets/planet-${planetName.toLowerCase().replaceAll(' ', '-')}.jpg`;
};

const setPlanetDiameter = (planetDiameter) => {
  return !Number.isNaN(planetDiameter) ? `${Number(planetDiameter).toLocaleString()} KM` : '';
};

const createPlanet = (planetSelected, planetsSearched, planets) => {
  const planetSelectedDetails = planetsSearched.filter((planet) => planet.name === planetSelected);

  if (planets.find((planet) => planet.name === planetSelectedDetails[0].name)) {
    return [...planets];
  }

  const planetSelectedFinal = {
    name: planetSelectedDetails[0].name,
    img: setPlanetImage(planetSelectedDetails[0].name),
    diameter: setPlanetDiameter(planetSelectedDetails[0].diameter),
    population: setPlanetPopulation(planetSelectedDetails[0].population),
    climate: setWordsAsTitles(planetSelectedDetails[0].climate),
    terrain: setWordsAsTitles(planetSelectedDetails[0].terrain)
  };

  return [...planets, planetSelectedFinal];
};

export default createPlanet;
