import styled from "styled-components";

import { H2, H3, P } from "../../../common/Typography";
import { COLORS } from "../../../constants/Colors";
import { BREAK_POINTS } from "../../../constants/BreakPoints";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  @media ${BREAK_POINTS.desktopMin} {
    flex-direction: row;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    } 
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
@media ${BREAK_POINTS.desktopMin} {
    width: 25%;
    margin-left: 16px;
    &:nth-child(even) {
      margin-right: 16px;
      margin-left: 0;
    } 
  }
`;

const Image = styled.img`
margin-bottom: 16px;
max-width: 100%;
  @media ${BREAK_POINTS.desktopMin} {
    width: 25%;
    margin-right: 16px;
    margin-bottom: 0;
    &:nth-child(even) {
      margin-left: 16px;
      margin-right: 0;
    } 
  }
`;

export { Wrap, TextWrap, Title, Description, LongDescription, LinksWrap, Link, LinkText, Image };
