import React, { useContext } from 'react';

import {Layout} from './styles';

import Navbar from '../../Components/Navbar';
import Filters from '../../Components/Filters';
import Pokemons from '../../Components/Pokemons';

const Pokedex = () => {
  return (
    <Layout>
      <Navbar />
      <Filters />
      <Pokemons />
    </Layout>
  )
}

export default Pokedex;