import React, { useContext } from "react";

import PokemonCard from "../PokemonCard";
import { Context } from "../../Context";
import { Main } from "./styles";

const PokemonsList = () => {

  const {pokemons} = useContext(Context);

      return (
        <Main>
          {
            pokemons.map((item) => {
              return <PokemonCard name={item.name} id={item.id} key={item.id} />
            })
          }
        </Main>
      );

  // const Image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon-id}.png`

};

export default PokemonsList;
