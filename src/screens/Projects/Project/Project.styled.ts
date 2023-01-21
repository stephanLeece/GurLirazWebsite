import styled from "styled-components";

import VideoComponent from "../Video";
import { H1, H4, P } from "../../../common/Typography";
import CarouselComponent from "../../../common/Carousel";
import { COLORS } from "../../../constants/Colors";
import { BREAK_POINTS } from "../../../constants/BreakPoints";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(H1)`
  color: ${COLORS.TextLight};
  margin: 0 0 16px 32px;
  @media ${BREAK_POINTS.tabletMax} {
    margin: 0 0 8px 16px;
  }
`;

const Description = styled(H4)`
  color: ${COLORS.TextLight};
  margin: 0 32px 16px;
  @media ${BREAK_POINTS.tabletMax} {
    margin: 0 16px 8px;
  }
`;

const Link = styled.a`
  color: ${COLORS.TextLight};
  margin: 0 auto 16px 32px;
  text-decoration: none;
  @media ${BREAK_POINTS.tabletMax} {
    margin: 0 0 8px 16px;
  }
  &:hover {
    color: ${COLORS.TextLight};
    opacity: 0.5;
  }
`;

const LinkText = styled(P)``;

const Carousel = styled(CarouselComponent)``;

const Video = styled(VideoComponent)``;

export { Wrap, Title, Description, Link, LinkText, Carousel, Video };
