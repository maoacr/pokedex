import React from 'react';
import {
  CardContainer,
  Card,
  PokemonImg,
  PokemonName
} from './styles';

const PokemonCard = ({name, id}) => {

  const codeImg = `${id}`.padStart(3, "0");


  return(
    <CardContainer>
      <Card>
        <PokemonImg src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${codeImg}.png`}></PokemonImg>
        <PokemonName>{name}</PokemonName>
      </Card>
    </CardContainer>
  )
}

export default PokemonCard;