import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

import { BREAK_POINTS } from "../../constants/BreakPoints";
import { COLORS } from "../../constants/Colors";
import { H1, H3 } from "../Typography";
import SocialComponent from "./Social";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.BackgroundLight};
  padding: 48px 24px;
`;

const MenuButton = styled.div`
  background: ${COLORS.BackgroundLight};
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

const Title = styled(H1)`
  text-align: center;
  color: ${COLORS.TextDark};
`;

const ProfileImage = styled.img`
  height: 180px;
  width: 180px;
  border: 1px solid ${COLORS.TextDark};
  -webkit-filter: contrast(120%), brightness(75%);
  filter: contrast(120%), brightness(75%);
`;

const SubTitle = styled(H3)`
  text-align: center;
  color: ${COLORS.TextDark};
`;

const PageLinksWrap = styled.div``;

const PageLink = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  margin-bottom: 16px;
  color: ${COLORS.TextDark};
  &:hover {
    opacity: 0.5;
  }
`;

const MailTo = styled.a`
  color: ${COLORS.TextDark};
  text-decoration: none;
  &:hover {
    color: ${COLORS.TextDark};
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
  Title,
  SubTitle,
  ProfileImage,
  PageLinksWrap,
  PageLink,
  MailTo,
  SocialWrap,
  Social
};
