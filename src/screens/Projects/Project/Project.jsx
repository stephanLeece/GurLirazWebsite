import React from "react";

import { Wrap, Title, Description, Carousel, Video } from "./Project.styled";

const Project = ({ className, projectData: { title, description, videos } }) => {
  return (
    <Wrap className={className}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Carousel>
        {videos && videos.map(video => (
          <Video youtubeId={video.youtubeVideoId} />
        ))}
      </Carousel>
    </Wrap>
  );
};

export default Project;
