import React from "react";

import { Wrap } from './GridWrap.styles';

const GridWrap = ({ children, className }) => (
  <Wrap className={className}>{children}</Wrap>
);

export default GridWrap;
