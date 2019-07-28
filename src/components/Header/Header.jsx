import React from "react";

import { TransitionPortal } from "gatsby-plugin-transition-link";

import { Wrap, Grid, Image, LinkWrap } from "./Header.styled";

const Header = ({ className }) => (
  <TransitionPortal>
    <Wrap className={className}>
      <Grid>
        <LinkWrap to="/" exit={{ length: 0.5 }}>
          <Image />
        </LinkWrap>

        <LinkWrap to="/shows" exit={{ length: 0.5 }}>
          Shows
        </LinkWrap>

        <LinkWrap to="/videos" exit={{ length: 0.5 }}>
          Videos
        </LinkWrap>
      </Grid>
    </Wrap>
  </TransitionPortal>
);

export default Header;
