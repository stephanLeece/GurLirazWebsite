import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby"
import { Wrap, LinkWrap } from "./Navigation.styled";
import { H1, H2, H3, P } from "../Typography";

const Navigation = props => {
  const { allContentfulAboutPage: commonData } = useStaticQuery(
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
  )
  console.log(commonData.edges[0].node.links)
  return (
  <Wrap className={props.className}>
    <H1>Gur Liaz</H1>
    <div>
      <LinkWrap to="/" exit={{ length: 0.5 }}>
        <H3>Home</H3>
      </LinkWrap>
      <LinkWrap to="/shows" exit={{ length: 0.5 }}>
        <H3>Shows</H3>
      </LinkWrap>
      <LinkWrap to="/videos" exit={{ length: 0.5 }}>
        <H3>Videos</H3>
      </LinkWrap>
    </div>
    <H2>Links</H2>
  </Wrap>
)};

export default Navigation;
