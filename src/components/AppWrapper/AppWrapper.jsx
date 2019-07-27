import React from "react";
import { Reset } from "styled-reset";

import {
  GlobalStyle,
  RootWrap,
  Head,
  PageTransitionWrap,
  Grid,
} from "./AppWrapper.styled";

const Layout = props => (
  <React.Fragment>
    <GlobalStyle />
    <Reset />
    <RootWrap {...props}>
      <Head />
      <PageTransitionWrap>
        <Grid>
          {props.children}
        </Grid>
      </PageTransitionWrap>
    </RootWrap>
  </React.Fragment>
);

export default Layout;
