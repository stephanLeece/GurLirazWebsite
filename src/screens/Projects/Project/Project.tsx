import React from "react";

import {
  Wrap,
  Title,
  Description,
  Link,
  LinkText,
  Carousel,
  Video
} from "./Project.styled";

type Video = {
  youtubeVideoId: string;
}
interface ProjectScreenProps {
  className?: string;
  projectData: {
    title: string;
    description: string;
    videos: Video[];
    projectWebsite: string;
  };
}

const Project = ({
  className,
  projectData: { title, description, videos, projectWebsite }
}: ProjectScreenProps) => {
  return (
    <Wrap className={className}>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {projectWebsite && (
        <Link href={projectWebsite} target="_blank" rel="noopener noreferrer">
          <LinkText>Visit Site</LinkText>
        </Link>
      )}
      <Carousel>
        {videos &&
          videos.map(video => <Video youtubeId={video.youtubeVideoId} />)}
      </Carousel>
    </Wrap>
  );
};

export default Project;
