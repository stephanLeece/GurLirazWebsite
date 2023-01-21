import React, { useState } from "react";
import { Reset } from "styled-reset";

import { GlobalStyle, RootWrap, Nav, PageWrap } from "./AppWrapper.styled";

interface AppWrapperProps {
  className?: string;
  location: string;
  children: React.ReactNode;
}

const AppWrapper = (props: AppWrapperProps) => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Reset />
      <RootWrap {...props}>
        <Nav
          {...props}
          isOpen={isMenuOpen}
          toggleMenu={() => toggleMenuOpen(!isMenuOpen)}
          closeMenu={() => toggleMenuOpen(false)}
        />
        <PageWrap>{props.children}</PageWrap>
      </RootWrap>
    </React.Fragment>
  );
};

export default AppWrapper;
