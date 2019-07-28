import styled, { createGlobalStyle } from "styled-components";

import { BREAK_POINTS } from "../../constants/BreakPoints";

import PageTransitionWrapper from "../PageTransitionWrapper";
import Header from "../Header";

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

const PageTransitionWrap = styled(PageTransitionWrapper)`
  margin-top: 24px;
`;

export { GlobalStyle, RootWrap, Head, PageTransitionWrap };
