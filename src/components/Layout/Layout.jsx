import React, { forwardRef } from "react";

import TransitionLink, {
  TransitionPortal
} from "gatsby-plugin-transition-link";
import { Reset } from "styled-reset";
import { GlobalStyle, RootWrap, NavBar } from "./Layout.styled";

const Layout = forwardRef((props, ref) => (
  <React.Fragment>
    <GlobalStyle />
    <Reset />
    <RootWrap ref={ref} {...props}>
      <TransitionPortal>
        <NavBar>
          <TransitionLink to="/" exit={{ length: 0.5 }} entry={{ delay: 0.5 }}>
            Go home
          </TransitionLink>
          <TransitionLink
            to="/links"
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
          >
            Go to links
          </TransitionLink>
          <TransitionLink
            to="/shows"
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
          >
            Go to shows
          </TransitionLink>
          <TransitionLink
            to="/videos"
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
          >
            Go to videos
          </TransitionLink>
        </NavBar>
      </TransitionPortal>

      {props.children}
    </RootWrap>
  </React.Fragment>
));

export default Layout;
