import styled from "styled-components";

import VideoComponent from "../Video";
import { BREAK_POINTS } from "../../../constants/BreakPoints";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const Carousel = styled.div`
  width: 100%;
  margin: 0 -5%;
  padding: 0 5%;
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
  @media ${BREAK_POINTS.laptopMin} {
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
    padding-right: 7.5%;
  }
  @media ${BREAK_POINTS.laptopMin} {
    margin: 16px;
    min-width: 40%;
    &:last-of-type {
      padding-right: 0;
    }
  }
`;

const Video = styled(VideoComponent)`
 width: 100%;
`;

export { Wrap, Carousel, Slide, Video };
