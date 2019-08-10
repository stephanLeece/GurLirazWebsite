import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";
import SocialLink from './SocialLink';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(225,225,225,1);
  padding: 48px 24px;
`;

const TitleWrap = styled.div`
  text-align: center;
`;

const PageLinksWrap = styled.div`

`;

const PageLink = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  margin-bottom: 16px;
  &:hover {
    opacity: 0.5;
  }
`;

const SocialWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Social = styled(SocialLink)``;

export { Wrap, TitleWrap, PageLinksWrap, PageLink, SocialWrap, Social };
