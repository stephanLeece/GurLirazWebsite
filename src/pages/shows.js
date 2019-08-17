import React from "react";

import AppWrapper from "../components/AppWrapper";
import ShowsScreen from "../screens/Shows";

const Shows = props => (
  <AppWrapper location={props.location}>
    <ShowsScreen rawShows = {props.data.allContentfulShow}/>
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
}
`;