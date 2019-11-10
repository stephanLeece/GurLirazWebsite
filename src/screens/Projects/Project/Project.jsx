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

const Project = ({
  className,
  projectData: { title, description, videos, projectWebsite }
}) => {
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
