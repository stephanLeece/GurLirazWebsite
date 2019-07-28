import React from "react";

import { Wrap, Grid, Image, LinkWrap } from "./Header.styled";

const Header = ({ className }) => (
    <Wrap className={className}>
      <Grid>
        <LinkWrap to="/" exit={{ length: 0.5 }}>
          <Image />
          Home
        </LinkWrap>
        <LinkWrap to="/shows" exit={{ length: 0.5 }}>
          Shows
        </LinkWrap>
        <LinkWrap to="/videos" exit={{ length: 0.5 }}>
          Videos
        </LinkWrap>
      </Grid>
    </Wrap>
);

export default Header;
