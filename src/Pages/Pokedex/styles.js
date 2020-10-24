import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ui--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 100px 1fr;
  }
`