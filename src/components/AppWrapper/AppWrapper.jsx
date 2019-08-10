import React, { useState } from 'react';
import { Reset } from "styled-reset";

import {
  GlobalStyle,
  RootWrap,
  MenuButton,
  Nav,
  PageTransitionWrap,
} from "./AppWrapper.styled";

const Layout = props => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  return(
  <React.Fragment>
    <GlobalStyle />
    <Reset />
    <RootWrap {...props}>
      <Nav {...props} isOpen={isMenuOpen} closeMenu={() => toggleMenuOpen(!isMenuOpen)}/>
      <PageTransitionWrap>
          {props.children}
      </PageTransitionWrap>
    </RootWrap>
  </React.Fragment>
)};

export default Layout;
