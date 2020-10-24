import React, { useContext } from 'react';
import { Context } from '../../Context';
import { 
  FiltersCard, 
  TypeFilter, 
  ColorFilter, 
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
      <h3>Type</h3>
      <TypeFilter>
       
      </TypeFilter>
      <h3>Color</h3>
      <ColorFilter>

      </ColorFilter>
      <h3>Gender</h3>
      <GenderFilter>
          <Button onClick={getMalePokemons} type="button">Male</Button>
          <Button onClick={getFemalePokemons} type="button">Female</Button>
      </GenderFilter>

    </FiltersCard>
  )
}

export default Filters;