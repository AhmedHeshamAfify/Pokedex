import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setPokemonData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    if (validateInput(searchTerm)) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
        );
        setPokemonData(response.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Pokémon not found');
        setPokemonData(null);
      }
    } else {
      setErrorMessage('Please enter a valid Pokémon ID or name');
    }
  };

  const validateInput = (input) => {
    return input.trim() !== '' && /^[a-zA-Z0-9]+$/.test(input);
  };

  return (
    <div className="input-group mb-3">
        <div className='col'>
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter a name or ID"
          />
          {errorMessage && (
            <div className="alert alert-danger mt-2" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
        <div className="input-group-append">
          <button className="btn btn-danger" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
  );
}

export default SearchBar;
