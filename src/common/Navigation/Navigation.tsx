import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
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
} from "./Navigation.styled";

import HamburgerIcon from "./assets/hamburger.svg"
import CloseIcon from "./assets/close.svg";
import { H3 } from "../Typography";

interface NavigationProps {
  className: string;
  toggleMenu: () => void;
  closeMenu: () => void;
  isOpen: boolean;
}

const Navigation = ({ className, toggleMenu, closeMenu, isOpen }: NavigationProps) => {
  const { allContentfulAboutPage: navContent } = useStaticQuery(
    graphql`
      query NavigationQuery {
        allContentfulAboutPage {
          edges {
            node {
              profilePhoto {
                file {
                  url
                }
              }
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
  const profilePhotoUrl = navContent && navContent.edges[0].node.profilePhoto.file.url;
  return (
    <Wrap className={className}>
      <MenuButton isOpen={isOpen} onClick={toggleMenu}>
        <Icon src={isOpen ? CloseIcon : HamburgerIcon} alt={isOpen ? "Close Menu" : "Open Menu"} />
      </MenuButton>
      <Title>Gur Liraz</Title>
      <ProfileImage src={profilePhotoUrl} alt="A photo of Gur Liraz" />
      <SubTitle>Guitarist | Composer</SubTitle>
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
      <MailTo href="mailto: gurliraz@gmail.com">
        <H3>gurliraz@gmail.com</H3>
      </MailTo>
      <SocialWrap>
        {socialLinks.map((link: any) => (
          <Social linkData={link} />
        ))}
      </SocialWrap>
    </Wrap>
  );
};

export default Navigation;
