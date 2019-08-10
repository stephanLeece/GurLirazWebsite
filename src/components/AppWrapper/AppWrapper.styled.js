import styled, { createGlobalStyle, css } from "styled-components";
import WrapBackground from "./assets/wrapBg.svg";
import PageTransitionWrapper from "../PageTransitionWrapper";
import Navigation from "../Navigation";
import { BREAK_POINTS } from "../../constants/BreakPoints";

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
  width: 100%;
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
  @media ${BREAK_POINTS.tabletMax} {
    transform: translateX(-100%);
    transition: all 0.25s cubic-bezier(.694, .0482, .335, 1);
    ${({ isOpen }) => isOpen && css`
        transform: translateX(0);
    `};
  }
`;

const PageTransitionWrap = styled(PageTransitionWrapper)`
  margin-left: 0;
  padding: 48px 0;
  width: 100%;
  @media ${BREAK_POINTS.laptopMin} {
    margin-left: ${NAV_WIDTH_DESKTOP}px;
  }
`;

export { GlobalStyle, RootWrap, Nav, PageTransitionWrap };
