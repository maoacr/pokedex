import React, { useState, useLayoutEffect, useEffect } from 'react';

import Button from '../Button/index.js';
import { Main } from './styles';

const Pokemons = () => {
  return(
    <Main>
      <h3>Choose a pokemon to get more information</h3>
      <Button/>
    </Main>
  )
}

export default Pokemons;