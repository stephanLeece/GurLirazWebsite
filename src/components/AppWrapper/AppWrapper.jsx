import React, { useState } from 'react';
import { Reset } from "styled-reset";

import {
  GlobalStyle,
  RootWrap,
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
      <Nav {...props} isOpen={isMenuOpen} toggleMenu={() => toggleMenuOpen(!isMenuOpen)} closeMenu={() => toggleMenuOpen(false)}/>
      <PageTransitionWrap>
          {props.children}
      </PageTransitionWrap>
    </RootWrap>
  </React.Fragment>
)};

export default Layout;
