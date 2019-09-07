import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

import { BREAK_POINTS } from "../../constants/BreakPoints";
import { COLORS } from "../../constants/Colors";
import SocialComponent from "./Social";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.Grey3};
  padding: 48px 24px;
`;

const MenuButton = styled.div`
  background: ${COLORS.Grey3};
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
  right: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${BREAK_POINTS.desktopMin} {
    display: none;
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const TitleWrap = styled.div`
  text-align: center;
  color: ${COLORS.Grey1};
`;

const PageLinksWrap = styled.div``;

const PageLink = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  margin-bottom: 16px;
  color: ${COLORS.Grey1};
  &:hover {
    opacity: 0.5;
  }
`;

const MailTo = styled.a`
  color: ${COLORS.Grey1};
  text-decoration: none;
  &:hover {
    color: #333333;
    opacity: 0.5;
  }
`;

const SocialWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Social = styled(SocialComponent)``;

export {
  Wrap,
  MenuButton,
  Icon,
  TitleWrap,
  PageLinksWrap,
  PageLink,
  MailTo,
  SocialWrap,
  Social
};
