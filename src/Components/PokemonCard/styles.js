import styled from 'styled-components';

import { Colors } from '../../Utils/Constants';

export const CardContainer = styled.div`
  display : flex;
  width: 180px;
  height: 180px;
  text-align: center;
  justify-content: center;
  margin: 30px 5px;
  cursor: pointer;
`
export const Card = styled.div`
  width: 100%;
  height: 100%; 
  background-color: #FFF;
  border-radius: 50%;
  border: 3px solid ${Colors.darkBlue};
`
export const PokemonImg = styled.img`
  width: 100px;
  margin-top: 25px;
`
export const PokemonName = styled.h1`
  font-size: 16px;
  margin: 0 0;
  color: ${Colors.darkRed};
  text-transform: capitalize;
`