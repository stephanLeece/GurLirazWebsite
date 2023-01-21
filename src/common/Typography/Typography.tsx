import React from "react";

import { StyledH1, StyledH2, StyledH3, StyledH4, StyledP } from "./Typography.styled";

interface TypographyProps {
  className?: string;
  children: React.ReactNode;
}

export const H1 = ({ children, className }: TypographyProps) => (
  <StyledH1 className={className}>{children}</StyledH1>
);

export const H2 = ({ children, className }: TypographyProps) => (
  <StyledH2 className={className}>{children}</StyledH2>
);

export const H3 = ({ children, className }: TypographyProps) => (
  <StyledH3 className={className}>{children}</StyledH3>
);

export const H4 = ({ children, className }: TypographyProps) => (
  <StyledH4 className={className}>{children}</StyledH4>
);

export const P = ({ children, className }: TypographyProps) => (
  <StyledP className={className}>{children}</StyledP>
);
