import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";

import AppWrapper from "../common/AppWrapper";
import ProjectsScreen from "../screens/Projects";

const Projects = props => (
  <AppWrapper location={props.location}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Projects</title>
        </Helmet>
    <ProjectsScreen projectsScreenData={props.data.allContentfulProjectsPage.edges[0].node} />
  </AppWrapper>
);

export default Projects;

export const projectsQuery = graphql`
  query projectsQuery {
    allContentfulProjectsPage {
      edges {
        node {
          pageTitle
          description
          projects {
            title
            description
            videos {
              title
              youtubeVideoId
            }
          }
        }
      }
    }
  }
`;
