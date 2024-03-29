import styled, { createGlobalStyle, css } from "styled-components";
import Navigation from "../Navigation";
import { BREAK_POINTS } from "../../constants/BreakPoints";
import { COLORS } from "../../constants/Colors";
import PageTransitionWraper from "../PageTransitionWrapper";

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

const NAV_WIDTH_DESKTOP = 300;

const RootWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  background: ${COLORS.BackgroundDark};
`;

const Nav = styled(Navigation)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: ${NAV_WIDTH_DESKTOP}px;
  @media ${BREAK_POINTS.mobileMax} {
    transform: translateX(-100%);
    transition: all 0.25s cubic-bezier(0.694, 0.0482, 0.335, 1);
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(0);
      `};
  }
`;

const PageWrap = styled(PageTransitionWraper)`
  margin-left: 0;
  padding: 48px 0;
  width: 100%;
  @media ${BREAK_POINTS.tabletMin} {
    margin-left: ${NAV_WIDTH_DESKTOP}px;
  }
`;

export { GlobalStyle, RootWrap, Nav, PageWrap };
