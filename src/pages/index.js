import React from "react";
import { graphql } from 'gatsby';

import AppWrapper from "../components/AppWrapper";
import HomeScreen from "../screens/Home";

const Home = props => (
  <AppWrapper location={props.location}>
    <HomeScreen />
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