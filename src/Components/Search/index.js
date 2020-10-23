import React from 'react';
import { MdSearch } from 'react-icons/md';

import { SearchBox, Input, Icon } from './styles';

const Search = () => {
  return (
    <SearchBox>
      <Input type="text" placeholder="Atrápa tu pokemon !"/>
      <Icon><MdSearch/></Icon>
    </SearchBox>
  );
};

export default Search;