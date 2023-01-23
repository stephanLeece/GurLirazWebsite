import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';

import AppWrapper from "../common/AppWrapper";
import ReleasesScreen from "../screens/Releases";

interface PageProps {
  location: string;
  data: any;
}

const Releases = (props: PageProps) => (
  <AppWrapper location={props.location}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Releases</title>
    </Helmet>
    <ReleasesScreen releases={props.data.allContentfulRelease} />
  </AppWrapper>
);

export default Releases;

export const releasesQuery = graphql`
query {
  allContentfulRelease {
    nodes {
      title
      image {
        url
      }
      shortDescription
      longDescription
      purchaseLink
      streamingLink
    }
  }
}
`;
