import styled from "styled-components";

import { BREAK_POINTS } from "../constants/BreakPoints";
import GridWrap from "../components/GridWrap";

const Grid = styled(GridWrap)`
  margin: 0;
`;

const Carousel = styled.div`
  margin: 0 -5%;
  padding: 0 16px;
  border: 1px solid black;
  grid-column: 1 / -1;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: mandatory;
  -ms-scroll-snap-type: mandatory;
  scroll-snap-points-x: repeat(100%);
  -ms-scroll-snap-points-x: repeat(100%);
  scroll-snap-type: x mandatory;
  @media ${BREAK_POINTS.laptop} {
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  }
`;

const Slide = styled.div`
  min-width: 80%;
  min-height: 200px;
  scroll-snap-align: center;
  margin: 16px;
  &:last-of-type {
    padding-right: 10%;
  }
  @media ${BREAK_POINTS.laptop} {
    margin: 16px;
    min-width: 40%;
    min-height: 400px;
    &:last-of-type {
      padding-right: 0;
    }
    border: 1px solid black;
  }
`;

const DummyVideo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export { Grid, Carousel, Slide, DummyVideo };
