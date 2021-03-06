import styled from 'styled-components';

import { Colors } from '../../Utils/Constants';


export const FiltersCard = styled.aside`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  width: 90%;
  border-radius: 10px;
  margin: 30px 10px;
  padding: 30px 0;;
  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.12);
  -moz-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.12);
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.12);
  text-align: center;
  background-color: ${Colors.mainBlue};
  color: white;
` 
export const Button = styled.button`
  width: 80%;
  margin: 0 5px 5px;
  padding: 8px 24px;
  color: ${Colors.yellow};
  background-color: ${Colors.darkBlue};
  border-radius: 25px;
  font-weight: bold;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`
export const GenderFilter = styled.div`

`