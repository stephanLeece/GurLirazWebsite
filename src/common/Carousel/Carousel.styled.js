import styled from "styled-components";

import { BREAK_POINTS } from "../../constants/BreakPoints";

const Wrap = styled.div`
  width: 100%;
  margin: 0 -16px 0 0;
  padding-left: 16px;
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
  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  @media ${BREAK_POINTS.laptopMin} {
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0 32px;
  }
`;

const Slide = styled.div`
  min-width: 80%;
  min-height: 200px;
  scroll-snap-align: center;
  margin: 16px 16px 16px 0;
  &:nth-last-child(2) {
    margin: 16px 0;
  }
  @media ${BREAK_POINTS.laptopMin} {
    margin-right: 16px;
    min-width: 30%;
  }
`;

const Gap = styled.div`
  width: 0px;
  padding-left: 16px;
  &:first-child {
    display: none;
  }
  @media ${BREAK_POINTS.laptopMin} {
    display: none;
  }
`;

export { Wrap, Slide, Gap };
