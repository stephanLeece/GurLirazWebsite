import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

import GridWrap from "../GridWrap";
import { BREAK_POINTS } from "../../constants/BreakPoints";

const Wrap = styled.div`
  width: 100vw;
`;

const Grid = styled(GridWrap)`
  height: 100%;
  margin: 0;
  grid-template-areas:
    " aboutLink aboutLink aboutLink aboutLink "
    " showsLink videosLink contactLink . ";
  @media ${BREAK_POINTS.laptop} {
    grid-template-areas: " aboutLink aboutLink aboutLink aboutLink aboutLink aboutLink showsLink showsLink videosLink videosLink contactLink contactLink";
  }
`;

const Image = styled.div`
  height: 100%;
  background: black;
`;

const LinkWrap = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  &:nth-of-type(1) {
    grid-area: aboutLink;
  }
  &:nth-of-type(2) {
    grid-area: showsLink;
  }
  &:nth-of-type(3) {
    grid-area: videosLink;
  }
  &:nth-of-type(4) {
    grid-area: contactLink;
    margin-right: 8px;
    @media ${BREAK_POINTS.laptop} {
      margin-right: 16px;
    }
  }
`;

export { Wrap, Grid, Image, LinkWrap };
