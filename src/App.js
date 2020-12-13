import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokedex index="1" min="1" max="500" />
      </header>
    </div>
  );
}

export default App;
