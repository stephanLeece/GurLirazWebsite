import styled from "styled-components";

import VideoComponent from "../Video";
import { H1, H4 } from "../../../common/Typography";
import CarouselComponent from "../../../common/Carousel";
import { COLORS } from "../../../constants/Colors";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(H1)`
  color: ${COLORS.TextLight};
  margin-bottom: 8px;
`;

const Description = styled(H4)`
  color: ${COLORS.TextLight};
  margin-bottom: 8px;
`;

const Carousel = styled(CarouselComponent)`
`;

const Video = styled(VideoComponent)``;

export { Wrap, Title, Description, Carousel, Video };
