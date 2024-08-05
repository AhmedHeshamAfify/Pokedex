import React from 'react';

function PokemonList({ pokemons, onRemove }) {
  return (
    <div className="pokemon-list">
      <h3>Pokémons</h3>
      <div className="img-list">
        {pokemons.map((pokemon, index) => (
          <img
            key={index}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            onClick={() => onRemove(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
