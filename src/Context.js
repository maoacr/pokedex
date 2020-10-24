
import React, { createContext, useState, useEffect } from 'react';
// import Mock from '../mock.json';
const Context = createContext();

const Provider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const getMalePokemons = () => {
    fetch('https://pokeapi.co/api/v2/gender/2/')
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        const results = data.pokemon_species_details.map( item => {

          const splits = item.pokemon_species.url.split("/")

            return {
              name: item.pokemon_species.name,
              id : splits[splits.length-2]
            }
        })
        setPokemons(results)

      });
  }

  const getFemalePokemons = () => {
    fetch('https://pokeapi.co/api/v2/gender/1/')
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        const results = data.pokemon_species_details.map( item => {

          const splits = item.pokemon_species.url.split("/")

            return {
              name: item.pokemon_species.name,
              id : splits[splits.length-2]
            }
        })
        setPokemons(results)

      });
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/national/')
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        const results = data.pokemon_entries.map( item => {
          return { 
            name: item.pokemon_species.name,
            id: item.entry_number
          }
        }) 
        setPokemons(results) 
      });
    }, []);
  return <Context.Provider value={{pokemons, getMalePokemons, getFemalePokemons}}>{children}</Context.Provider>;
};

export { Context, Provider };