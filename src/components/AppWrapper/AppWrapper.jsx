import React from "react";
import { Reset } from "styled-reset";

import {
  GlobalStyle,
  RootWrap,
  Head,
  PageTransitionWrap,
} from "./AppWrapper.styled";

const Layout = props => (
  <React.Fragment>
    <GlobalStyle />
    <Reset />
    <RootWrap {...props}>
      <Head />
      <PageTransitionWrap>
          {props.children}
      </PageTransitionWrap>
    </RootWrap>
  </React.Fragment>
);

export default Layout;
