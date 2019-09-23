import styled from "styled-components";

import { H1, P } from "../../common/Typography";
import GridWrap from "../../common/GridWrap";
import { COLORS } from "../../constants/Colors";
import { BREAK_POINTS } from "../../constants/BreakPoints";

const Wrap = styled(GridWrap)`
  max-width: 100%;
  > * {
    grid-column: 1 / -1;
    margin-bottom: 16px;
  }
`;

const Title = styled(H1)`
  color: ${COLORS.TextLight};
  @media ${BREAK_POINTS.desktopMin} {
    display: none;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media ${BREAK_POINTS.desktopMin} {
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  }
`;

const Text = styled(P)`
  color: ${COLORS.TextLight};
  margin-bottom: 8px;
  @media ${BREAK_POINTS.desktopMin} {
    margin-bottom: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
  &:first-child {
    margin-bottom: 16px;
  }
  &:last-child {
    margin-top: 16px;
  }
  @media ${BREAK_POINTS.desktopMin} {
    width: 25%;
    &:first-child {
      margin-right: 16px;
    }
    &:last-child {
      margin-left: 16px;
    }
  }
`;

const SoundCloudWrap = styled.div`
  @media ${BREAK_POINTS.desktopMin} {
    width: 25%;
  }
`;

export { Wrap, Title, TextBlock, Text, Image, SoundCloudWrap };
