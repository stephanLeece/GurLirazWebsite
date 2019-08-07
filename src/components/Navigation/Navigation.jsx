import React from "react";

import { Wrap, Image, LinkWrap } from "./Navigation.styled";

const Navigation = ({ className }) => (
  <Wrap className={className}>
  <p>Gur Liaz</p>
    <div>
      <LinkWrap to="/" exit={{ length: 0.5 }}>Home</LinkWrap>
      <LinkWrap to="/shows" exit={{ length: 0.5 }}>Shows</LinkWrap>
      <LinkWrap to="/videos" exit={{ length: 0.5 }}>Videos</LinkWrap>
    </div>
    <p>Links</p>
  </Wrap>
);

export default Navigation;
