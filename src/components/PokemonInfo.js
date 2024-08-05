import React from 'react';

function PokemonInfo({ pokemon, onCapture, isCaptureDisabled }) {
  const { name, id, sprites, types, stats } = pokemon;

  return (
    <div className="pokemon-info">
      <div className="col">
        <img src={sprites.front_default} alt={name} />
      </div>
      <div className="col">
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <p>#{id}</p>
      </div>
      <div className="col">
        <strong>Type:</strong>{' '}
        {types.map((type) => type.type.name).join(', ')}
      </div>
      {stats
        .filter((stat) =>
          ['hp', 'attack', 'defense', 'speed'].includes(stat.stat.name)
        )
        .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
        .join(', ')}
      <button className="capture" onClick={onCapture} disabled={isCaptureDisabled}>
        Capture
      </button>
    </div>
  );
}

export default PokemonInfo;
