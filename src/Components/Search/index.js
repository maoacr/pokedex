import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { SearchBox, Input, Icon } from './styles';

const Search = () => {

  const [searchKeyword,setSearchKeyword] = useState("");
  const handleChangeSearch = (e) => {
    setSearchKeyword(e.target.value)
  }

  console.log(searchKeyword);


  return (
    <SearchBox>
      <Input 
        type="text"
        placeholder="Atrápa tu pokemon !"
        value={searchKeyword}
        onChange={handleChangeSearch}
      />
      <Icon><MdSearch/></Icon>
    </SearchBox>
  );
};

export default Search;