import styled from "styled-components";

import { H2, H3, P } from "../../../common/Typography";
import CarouselComponent from "../../../common/Carousel";
import { COLORS } from "../../../constants/Colors";
import { BREAK_POINTS } from "../../../constants/BreakPoints";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${BREAK_POINTS.desktopMin} {
    flex-direction: row;
  }
`;

const Title = styled(H2)`
  color: ${COLORS.TextLight};
  margin-bottom: 16px;
`;

const Description = styled(H3)`
  color: ${COLORS.TextLight};
  margin-bottom: 16px;
`;

const LongDescription = styled(P)`
  color: ${COLORS.TextLight};
  margin-bottom: 16px;
`;

const Link = styled.a`
  color: ${COLORS.TextLight};
  &:hover {
    color: ${COLORS.TextLight};
    opacity: 0.5;
  }
`;

const LinksWrap = styled.div`
  display: flex;
`;

const LinkText = styled(P)``;

const TextWrap = styled.div`
display: flex;
flex-direction: column;
`;

const Image = styled.img`
margin-bottom: 16px;
max-width: 100%;
  @media ${BREAK_POINTS.desktopMin} {
    width: 25%;
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

export { Wrap, TextWrap, Title, Description, LongDescription, LinksWrap, Link, LinkText, Image };
