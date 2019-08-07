import styled, { createGlobalStyle } from "styled-components";
import WrapBackground from './assets/wrapBg.svg';
import PageTransitionWrapper from "../PageTransitionWrapper";
import Navigation from "../Navigation";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Abel|Raleway:400,700&display=swap');
    height: 100%;
    width: 100%;
  }
`;

const HEADER_WIDTH_DESKTOP = 256;
const HEADER_HEIGHT_MOBILE = 256;

const RootWrap = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
  background-image: url(${WrapBackground});
  background-size: cover;
`;

const Nav = styled(Navigation)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: ${HEADER_WIDTH_DESKTOP}px;
  /* font-family: 'Abel', sans-serif; */
    font-family: 'Raleway', sans-serif;
`;

const PageTransitionWrap = styled(PageTransitionWrapper)`
  margin-left: ${HEADER_WIDTH_DESKTOP}px;
  padding: 48px 0;
`;

export { GlobalStyle, RootWrap, Nav, PageTransitionWrap };
