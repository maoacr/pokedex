import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 100px 1fr;
  }
`

