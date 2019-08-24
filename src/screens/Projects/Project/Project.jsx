import React from "react";

import { Wrap, Carousel, Slide, Video } from "./Project.styled";
import { H2, P } from "../../../components/Typography";

const Project = ({ className, projectData: { title, description, videos } }) => {
  return (
    <Wrap className={className}>
      <H2>{title}</H2>
      <P>{description}</P>
      <Carousel>
        {videos.map(video => (
          <Slide>
            <Video youtubeId={video.youtubeVideoId} />
          </Slide>
        ))}
      </Carousel>
    </Wrap>
  );
};

export default Project;
