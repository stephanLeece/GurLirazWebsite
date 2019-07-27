import React from "react";

import TransitionLink, {
  TransitionPortal
} from "gatsby-plugin-transition-link";

import { Wrap, Grid } from "./Header.styled";

const Header = ({ className }) => (
  <TransitionPortal>
    <Wrap className={className}>
    <Grid>
      <TransitionLink to="/" exit={{ length: 0.5 }}>
        Go home
      </TransitionLink>
      <TransitionLink to="/links" exit={{ length: 0.5 }}>
        Go to links
      </TransitionLink>
      <TransitionLink to="/shows" exit={{ length: 0.5 }}>
        Go to shows
      </TransitionLink>
      <TransitionLink to="/videos" exit={{ length: 0.5 }}>
        Go to videos
      </TransitionLink>
      </Grid>
    </Wrap>
  </TransitionPortal>
);

export default Header;
