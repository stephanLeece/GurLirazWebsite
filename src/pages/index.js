import React from "react";
import { graphql } from 'gatsby';

import AppWrapper from "../common/AppWrapper";
import HomeScreen from "../screens/Home";

const Home = props => (
  <AppWrapper location={props.location}>
    <HomeScreen homeScreenData={props.data.allContentfulAboutPage.edges[0].node}/>
  </AppWrapper>
);

export default Home;

export const homePageQuery = graphql`
query HomeQuery {
  allContentfulAboutPage {
    edges {
      node {
        mainDescription {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`