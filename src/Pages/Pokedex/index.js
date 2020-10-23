import React from 'react';

import {Layout} from './styles';

import Navbar from '../../Components/Navbar';
import Filters from '../../Components/Filters';
import PokemonsList from '../../Components/PokemonsList';

const Pokedex = () => {
  return (
    <Layout>
      <Navbar />
      <Filters />
      <PokemonsList />
    </Layout>
  )
}

export default Pokedex;