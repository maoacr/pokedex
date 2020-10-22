import React, { useState, useLayoutEffect, useEffect } from 'react';

import Button from '../Button/index.js';
import { Main } from './styles';

const Pokemons = () => {
  let [pokemons, setPokemon] = useState([]);

const handleClick = (e) => {
  
}

  return(
    <Main>
      <h3>Choose a pokemon to get more information</h3>

      <Button onClick={handleClick}/>
    </Main>
  )
}

export default Pokemons;