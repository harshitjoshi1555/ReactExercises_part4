import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'; 

const Pokedex = ({ pokemon }) => {
  const topThree = pokemon.slice(0, 3);
  const bottomTwo = pokemon.slice(3, 5);

  return (
    <div className="pokedex">
      <div className="top-section">
        {topThree.map((pokeData) => (
          <Pokecard key={pokeData.id} {...pokeData} />
        ))}
      </div>
      <div className="bottom-section">
        {bottomTwo.map((pokeData) => (
          <Pokecard key={pokeData.id} {...pokeData} />
        ))}
      </div>
    </div>
  );
};

Pokedex.defaultProps = {
  pokemon: [
    {
      id: 1,
      name: 'Charmander',
      type: 'fire',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 2,
      name: 'Squirtle',
      type: 'water',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      id: 3,
      name: 'Butterfree',
      type: 'flying',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
      id: 4,
      name: 'Rattata',
      type: 'normal',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    {
      id: 5,
      name: 'Metapod',
      type: 'bug',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
  ],
};

export default Pokedex;
