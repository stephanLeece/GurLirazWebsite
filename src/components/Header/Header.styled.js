import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

import GridWrap from "../GridWrap";
import { BREAK_POINTS } from "../../constants/BreakPoints";

const Wrap = styled.div`
  width: 100vw;
  background: white;
`;

const Grid = styled(GridWrap)`
  height: 100%;
  margin: 0;
  grid-template-areas:
    " aboutLink aboutLink aboutLink aboutLink "
    " showsLink showsLink videosLink videosLink ";
  @media ${BREAK_POINTS.laptop} {
    grid-template-areas: " aboutLink aboutLink aboutLink aboutLink aboutLink aboutLink showsLink showsLink showsLink videosLink videosLink videosLink ";
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
`;

export { Wrap, Grid, Image, LinkWrap };
