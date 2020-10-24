import React from 'react';

import { FiltersCard, TypeFilter, ColorFilter, GenderFilter, Red, Green, Yellow, Blue, Purple } from './styles';

const Filters = () => {
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

      </GenderFilter>

    </FiltersCard>
  )
}

export default Filters;