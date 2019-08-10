import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Wrap, CloseButton, TitleWrap, PageLinksWrap, PageLink, SocialWrap, Social } from "./Navigation.styled";
import { H1, H2, H3, P } from "../Typography";

const Navigation = ({className, closeMenu}) => {
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
    <CloseButton onClick={closeMenu}>x</CloseButton>
      <TitleWrap>
        <H1>Gur Liaz</H1>
        <H3>Guitarist | Composer</H3>
      </TitleWrap>
      <PageLinksWrap>
        <PageLink to="/" exit={{ length: 0.5 }}>
          <H3>Home</H3>
        </PageLink>
        <PageLink to="/shows" exit={{ length: 0.5 }}>
          <H3>Shows</H3>
        </PageLink>
        <PageLink to="/videos" exit={{ length: 0.5 }}>
          <H3>Videos</H3>
        </PageLink>
      </PageLinksWrap>
      <SocialWrap>
        {socialLinks.map(link => (
          <Social linkData={link} />
        ))}
      </SocialWrap>
    </Wrap>
  );
};

export default Navigation;
