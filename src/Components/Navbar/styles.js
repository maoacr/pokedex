import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    height: 200px;
    text-align: center;
    align-items: center;
  } 
`

export const Pokelogo = styled.img`
  width: 120px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    width: 150px;
    margin: 30px 0;
  } 
`