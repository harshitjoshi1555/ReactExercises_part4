import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, image }) => {
  return (
    <div className="pokecard">
      <div className="pokecard-content">
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Pokecard;
