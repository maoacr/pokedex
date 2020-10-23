
import React, { createContext, useState, useEffect } from 'react';
// import Mock from '../mock.json';
export const Context = createContext();

const Provider = ({ children }) => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/national/')
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => setPokemons(data.pokemon_entries));
    }, []);
    console.log(pokemons)
  return <Context.Provider value={pokemons}>{children}</Context.Provider>;
};

export default Provider;