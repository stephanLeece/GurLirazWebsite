import React from "react";

import { Wrap } from './GridWrap.styles';

interface GridWrapProps {
  className: string;
  children: Array<React.ReactNode>;
}

const GridWrap = ({ children, className }: GridWrapProps) => (
  <Wrap className={className}>{children}</Wrap>
);

export default GridWrap;
