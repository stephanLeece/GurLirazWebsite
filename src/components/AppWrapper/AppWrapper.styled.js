import styled, { createGlobalStyle } from "styled-components";

import { BREAK_POINTS } from "../../constants/BreakPoints";

import PageTransitionWrapper from "../PageTransitionWrapper";
import Header from "../Header";
import GridWrap from "../GridWrap";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }
`;

const HEADER_HEIGHT_DESKTOP = 128;
const HEADER_HEIGHT_MOBILE = 256;

const RootWrap = styled.div`
  min-height: 100vh;
`;

const Head = styled(Header)`
  height: ${HEADER_HEIGHT_MOBILE}px;
  @media ${BREAK_POINTS.laptop} {
    height: ${HEADER_HEIGHT_DESKTOP}px;
  }
`;

const Grid = styled(GridWrap)`
  > * {
    grid-column: 1 / -1;
  }
`;

const PageTransitionWrap = styled(PageTransitionWrapper)`
  margin-top: ${HEADER_HEIGHT_MOBILE + 24}px;
  @media ${BREAK_POINTS.laptop} {
    margin-top: ${HEADER_HEIGHT_DESKTOP + 24}px;
  }
`;

export { GlobalStyle, RootWrap, Head, Grid, PageTransitionWrap };
