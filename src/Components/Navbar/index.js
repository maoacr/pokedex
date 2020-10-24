import React from 'react';

import Search from '../../Components/Search';
import { Wrapper, Pokelogo } from "./styles";

import Logo from '../../assets/logo.png';

const Navbar = () => {
    return(
      <Wrapper >
        <a href="/"><Pokelogo src={Logo} alt="Logo Pokedex" /></a>
        <Search />
      </Wrapper>
    )
}

export default Navbar;