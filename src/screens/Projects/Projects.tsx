import React from "react";

import { Grid, Project } from "./Projects.styled";

interface ProjectsScreenProps {
  projectsScreenData: {
    description: string;
    pageTitle: string;
    projects: any[];
  };
}

const Projects = ({
  projectsScreenData: { description, pageTitle, projects }
}: ProjectsScreenProps) => {
  return (
    <Grid>
      {projects && projects.map((project: any) => (
        <Project projectData={project} />
      ))}
    </Grid>
  );
};

export default Projects;
