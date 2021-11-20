import starWarsLogo from './assets/starwars-planets-header.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={starWarsLogo} className="StarWars Planets" alt="StarWars Planets" />
      </header>
    </div>
  );
}

export default App;
