import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';

import AppWrapper from "../common/AppWrapper";
import ShowsScreen from "../screens/Shows";

const Shows = props => (
  <AppWrapper location={props.location}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Shows</title>
        </Helmet>
    <ShowsScreen rawShows={props.data.allContentfulShow} photos={props.data.allContentfulShowPageContent.edges[0].node.photos} />
  </AppWrapper>
);

export default Shows;

export const videoQuery = graphql`
  query ShowQuery {
    allContentfulShow(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          mainDetails
          additionalDetails
          date
        }
      }
    }
    allContentfulShowPageContent {
      edges {
        node {
          photos {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
