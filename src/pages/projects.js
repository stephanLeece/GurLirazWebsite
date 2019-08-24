import React from "react";
import { graphql } from "gatsby";

import AppWrapper from "../components/AppWrapper";
import ProjectsScreen from "../screens/Projects";

const Projects = props => (
  <AppWrapper location={props.location}>
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
