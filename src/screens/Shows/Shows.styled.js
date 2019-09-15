import styled from "styled-components";

import { BREAK_POINTS } from "../../constants/BreakPoints";
import ShowList from "./ShowList";

const Wrap = styled.div`
  display: flex;
`;

const ShowSection = styled.div`
  flex: 0 0 auto;
  padding: 0 32px;
  @media ${BREAK_POINTS.tabletMax} {
    padding: 0 16px;
  }
  max-width: 100%;
`;

const ImageBlock = styled.div`
  margin: -48px 0;
  @media ${BREAK_POINTS.tabletMax} {
    display: none;
  }

`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const List = styled(ShowList)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export { Wrap, ShowSection, List, ImageBlock, Image };
