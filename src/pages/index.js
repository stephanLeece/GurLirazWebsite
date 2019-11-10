import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import AppWrapper from "../common/AppWrapper";
import HomeScreen from "../screens/Home";

const Home = props => (
  <AppWrapper location={props.location}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gur Liraz</title>
      <meta name="description" content="Guitarist | Composer. Guitar Lessons in Berlin" />
    </Helmet>
    <HomeScreen
      homeScreenData={props.data.allContentfulAboutPage.edges[0].node}
    />
  </AppWrapper>
);

export default Home;

export const homePageQuery = graphql`
  query HomeQuery {
    allContentfulAboutPage {
      edges {
        node {
          contentBlocks {
            id
            text {
              childMarkdownRemark {
                html
              }
            }
            image {
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
`;
