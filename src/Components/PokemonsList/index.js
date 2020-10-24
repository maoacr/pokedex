import React, { useContext } from "react";

import PokemonCard from "../PokemonCard";
import { Context } from "../../Context";
import { Main } from "./styles";

const PokemonsList = () => {

  const data = useContext(Context);

  console.log(data);

      return (
        <Main>
          <PokemonCard />
        </Main>
      );


  // const Image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon-id}.png`

    // return(
    //   <Context.Consumer >
    //   {
    //     (data) => {
    //       console.log(data)
    //       return (
    //         <Main>
    //           <PokemonCard />
    //         </Main>
    //       )
    //     }
    //   }
    //   </Context.Consumer>
    // )
};

export default PokemonsList;
