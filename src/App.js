// App.jsx
import React from 'react';
import Pokedex from './Pokedex';
import './Pokedex.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <Pokedex />
    </div>
  );
};

export default App;
