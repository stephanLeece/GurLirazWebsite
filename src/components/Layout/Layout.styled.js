import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
    width: 100%;
}

  body {
    height: 100%;
    width: 100%;
  }
`
const RootWrap = styled.div`
    background: grey;
    min-height: 100vh;
    width: 100%;
    margin-top: 132px;
    padding: 16px;
`;

const NavBar = styled.div`
    padding: 16px;
    height: 100px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background: black;
    color: white;
`;


export {
    GlobalStyle,
    RootWrap,
    NavBar
};