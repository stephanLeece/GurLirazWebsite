import styled, { createGlobalStyle } from "styled-components";

import PageTransitionWrapper from "../PageTransitionWrapper";
import Header from "../Header";
import GridWrap from "../GridWrap";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }
`;

const HEADER_HEIGHT = 100;

const RootWrap = styled.div`
  min-height: 100vh;
`;

const Head = styled(Header)`
  height: ${HEADER_HEIGHT}px;
`;

const Grid = styled(GridWrap)``;

const PageTransitionWrap = styled(PageTransitionWrapper)`
  margin-top: ${HEADER_HEIGHT}px;
`;

export { GlobalStyle, RootWrap, Head, Grid, PageTransitionWrap };
