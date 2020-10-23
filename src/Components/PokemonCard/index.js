import React from 'react';

import {
  CardContainer,
  Card,
  PokemonImg,
  PokemonName
} from './styles';

const PokemonCard = () => {
  return(
    <CardContainer>
      <Card>
        <PokemonImg></PokemonImg>
        <PokemonName>Name</PokemonName>
      </Card>
    </CardContainer>
  )
}

export default PokemonCard;