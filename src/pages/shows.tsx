import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';

import AppWrapper from "../common/AppWrapper";
import ShowsScreen from "../screens/Shows";

interface PageProps {
  location: string;
  data: any;
}

const Shows = (props: PageProps) => (
  <AppWrapper location={props.location}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Shows</title>
    </Helmet>
    <ShowsScreen rawShows={props.data.allContentfulShow} photos={props.data.allContentfulShowPageContent.edges[0].node.photos} />
  </AppWrapper>
);

export default Shows;

export const showQuery = graphql`
query ShowQuery {
  allContentfulShow(sort: {date: DESC}) {
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
          title
          file {
            url
          }
        }
      }
    }
  }
}
`;
