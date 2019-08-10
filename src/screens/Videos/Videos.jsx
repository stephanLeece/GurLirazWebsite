import React from "react";

import { Grid, Carousel, Slide, Video } from "./Videos.styled";

const Videos = videos => {
  const videoList = videos.videos.edges;
  return (
    <Grid>
      <Carousel>
        {videoList.map(video => (
          <Slide>
            <Video youtubeId={video.node.youtubeVideoId} />
          </Slide>
        ))}
      </Carousel>
    </Grid>
  );
};

export default Videos;
