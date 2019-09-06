import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  Wrap,
  MenuButton,
  Icon,
  TitleWrap,
  PageLinksWrap,
  PageLink,
  MailTo,
  SocialWrap,
  Social,
} from "./Navigation.styled";

import HamburgerIcon from './assets/hamburger.svg';
import CloseIcon from './assets/close.svg';

import { H1, H3 } from "../Typography";

const Navigation = ({ className, toggleMenu, closeMenu, isOpen }) => {
  const { allContentfulAboutPage: navContent } = useStaticQuery(
    graphql`
      query NavigationQuery {
        allContentfulAboutPage {
          edges {
            node {
              links {
                linkName
                linkUrl
                linkImage {
                  title
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const socialLinks = navContent && navContent.edges[0].node.links;
  return (
      <Wrap className={className}>
        <MenuButton onClick={toggleMenu}><Icon src={isOpen ? CloseIcon : HamburgerIcon} /></MenuButton>
        <TitleWrap>
          <H1>Gur Liaz</H1>
          <H3>Guitarist | Composer</H3>
        </TitleWrap>
        <PageLinksWrap>
          <PageLink
            onClick={closeMenu}
            to="/"
            enter={{ length: 0.5 }}
            exit={{ length: 0.5 }}
          >
            <H3>Home</H3>
          </PageLink>
          <PageLink
            onClick={closeMenu}
            to="/shows"
            enter={{ length: 0.5 }}
            exit={{ length: 0.5 }}
          >
            <H3>Shows</H3>
          </PageLink>
          <PageLink
            onClick={closeMenu}
            to="/projects"
            enter={{ length: 0.5 }}
            exit={{ length: 0.5 }}
          >
            <H3>Projects</H3>
          </PageLink>
        </PageLinksWrap>
        <MailTo href = "mailto: gurliraz@gmail.com"><H3>gurliraz@gmail.com</H3></MailTo>
        <SocialWrap>
          {socialLinks.map(link => (
            <Social linkData={link} />
          ))}
        </SocialWrap>
      </Wrap>
  );
};

export default Navigation;
