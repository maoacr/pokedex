import React from 'react';

import Search from '../../Components/Search';
import { Wrapper, Pokelogo } from "./styles";

import Logo from '../../assets/logo.png';

const Navbar = () => {
    return(
      <Wrapper >
        <Pokelogo src={Logo} alt="Logo Pokedex" />
        <Search />
      </Wrapper>
    )
}

export default Navbar;