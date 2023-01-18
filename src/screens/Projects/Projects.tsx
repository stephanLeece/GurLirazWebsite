import React from "react";

import { Grid, Project } from "./Projects.styled";

const Projects = ({
  projectsScreenData: { description, pageTitle, projects }
}) => {
  return (
    <Grid>
      {projects && projects.map(project => (
        <Project projectData={project} />
      ))}
    </Grid>
  );
};

export default Projects;
