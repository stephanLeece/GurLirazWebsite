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
    height: 100%;
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }
`;

const NAV_WIDTH_DESKTOP = 256;

const RootWrap = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
  background-image: url(${WrapBackground});
  background-size: cover;
  background-attachment: fixed;
`;

const Nav = styled(Navigation)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: ${NAV_WIDTH_DESKTOP}px;

`;

const PageTransitionWrap = styled(PageTransitionWrapper)`
  margin-left: ${NAV_WIDTH_DESKTOP}px;
  padding: 48px 0;
`;

export { GlobalStyle, RootWrap, Nav, PageTransitionWrap };
