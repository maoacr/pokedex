import React, { useContext } from 'react';
import { Context } from '../../Context';
import { FiltersCard, TypeFilter, ColorFilter, GenderFilter, Red, Green, Yellow, Blue, Purple } from './styles';

const Filters = () => {

  const {getMalePokemons, getFemalePokemons} = useContext(Context);
  
  // const clickingMale = () => {
  //   getMalePokemons();
  // }


  return(
    <FiltersCard>
      <h3>Type</h3>
      <TypeFilter>
       
      </TypeFilter>
      <h3>Color</h3>
      <ColorFilter>
        <Red></Red>
        <Green></Green>
        <Yellow></Yellow>
        <Blue></Blue>
        <Purple></Purple>
      </ColorFilter>
      <h3>Gender</h3>
      <GenderFilter>
          <button onClick={getMalePokemons} type="button">Male</button>
          <button onClick={getFemalePokemons} type="button">Female</button>
      </GenderFilter>

    </FiltersCard>
  )
}

export default Filters;