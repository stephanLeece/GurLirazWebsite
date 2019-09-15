import React from "react";

import { Wrap, Title, Description, Carousel, Video } from "./Project.styled";

const Project = ({
  className,
  projectData: { title, description, videos }
}) => {
  return (
    <Wrap className={className}>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      <Carousel>
        {videos &&
          videos.map(video => <Video youtubeId={video.youtubeVideoId} />)}
      </Carousel>
    </Wrap>
  );
};

export default Project;
