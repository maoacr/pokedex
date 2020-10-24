import React, { useContext } from 'react';
import { Context } from '../../Context';
import { 
  FiltersCard, 
  GenderFilter, 
  Button 
} from './styles';

const Filters = () => {

  const {getMalePokemons, getFemalePokemons} = useContext(Context);
  
  // const clickingMale = () => {
  //   getMalePokemons();
  // }


  return(
    <FiltersCard>
      <h3>Gender</h3>
      <GenderFilter>
          <Button onClick={getMalePokemons} type="button">Male</Button>
          <Button onClick={getFemalePokemons} type="button">Female</Button>
      </GenderFilter>

    </FiltersCard>
  )
}

export default Filters;