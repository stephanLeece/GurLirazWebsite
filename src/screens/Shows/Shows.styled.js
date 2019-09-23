import styled from "styled-components";

import { BREAK_POINTS } from "../../constants/BreakPoints";
import List from "./ShowList";

const Wrap = styled.div`
  display: flex;
`;

const ShowListSection = styled.section`
  flex: 0 0 auto;
  padding: 0 32px;
  @media ${BREAK_POINTS.tabletMax} {
    padding: 0 16px;
    width: 100%;
  }
  width: 50%;
`;

const ShowList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const ImageSection = styled.div`
  margin: -48px 0;
  @media ${BREAK_POINTS.mobileMax} {
    display: none;
  }
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;


export { Wrap, ShowListSection, ShowList, ImageSection, Image };
