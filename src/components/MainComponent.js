import React, { useState } from 'react';
import PokemonInfo from './PokemonInfo';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar'


function MainComponent() {

const [pokemonData, setPokemonData] = useState(null);
  const [pokemonPokemons, setPokemonPokemons] = useState([]);

  const handleCapture = () => {
    if (pokemonData && pokemonPokemons.length < 6) {
      setPokemonPokemons([...pokemonPokemons, pokemonData]);
    }
  };

  const handleRemove = (index) => {
    const newPokemonList = [...pokemonPokemons];
    newPokemonList.splice(index, 1);
    setPokemonPokemons(newPokemonList);
  };

  return (
    <><div className="row">
      <div className="app col">
        <SearchBar setPokemonData={setPokemonData} />
        {pokemonData && (
          <PokemonInfo
            pokemon={pokemonData}
            onCapture={handleCapture}
            isCaptureDisabled={pokemonPokemons.length >= 6} />
        )}
      </div>
      <div className="col">
        <PokemonList  pokemons={pokemonPokemons} onRemove={handleRemove} />
      </div>
    </div></>
  );
}

export default MainComponent;