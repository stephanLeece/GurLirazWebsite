import styled from "styled-components";

import VideoComponent from "../Video";
import { H2, P } from "../../../common/Typography";
import CarouselComponent from "../../../common/Carousel";
import { COLORS } from "../../../constants/Colors";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(H2)`
  color: ${COLORS.Grey5};
`;

const Description = styled(P)`
  color: ${COLORS.Grey5};
`;

const Carousel = styled(CarouselComponent)``;

const Video = styled(VideoComponent)``;

export { Wrap, Title, Description, Carousel, Video };
