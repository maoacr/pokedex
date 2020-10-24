import React from 'react';

import PokemonCard from '../PokemonCard';

import { Main } from './styles';

const PokemonsList = (pokemons) => {


  console.log(pokemons)
  // const Image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon-id}.png` 
  
  return(
    <Main>
      <PokemonCard />
    </Main>
  )
}

export default PokemonsList;