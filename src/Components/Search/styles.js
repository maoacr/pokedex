import styled from 'styled-components';

export const SearchBox = styled.div`
  grid-column: 1 / 4;
  background-color: white;
  height: 30px;
  width: -webkit-fill-available;
  max-width: 30%;
  border-radius: 50px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-right: 20px;
`
export const Input = styled.input`
  border: none;
  width: 80%;
  height: 90%;
  border-radius: 50%;
  outline: none;
  text-align: right;
  padding-right: 20px;
  cursor: pointer;
`

export const Icon = styled.span`
  padding-right: 10px;
  line-height: 36px;
  &:hover {
    cursor: pointer;
  }
`