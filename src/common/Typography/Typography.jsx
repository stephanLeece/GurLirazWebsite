import React from "react";

import { StyledH1, StyledH2, StyledH3, StyledH4, StyledP } from "./Typography.styled";

export const H1 = ({ children, className }) => (
  <StyledH1 className={className}>{children}</StyledH1>
);

export const H2 = ({ children, className }) => (
  <StyledH2 className={className}>{children}</StyledH2>
);

export const H3 = ({ children, className }) => (
  <StyledH3 className={className}>{children}</StyledH3>
);

export const H4 = ({ children, className }) => (
  <StyledH4 className={className}>{children}</StyledH4>
);

export const P = ({ children, className }) => (
  <StyledP className={className}>{children}</StyledP>
);
