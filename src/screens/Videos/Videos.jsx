import React from "react";

import DummyVideoImg from "../Assets/dummyVideo.png";
import { Grid, Carousel, Slide, DummyVideo } from "./Videos.styled";

const Videos = () => (
    <Grid>
      <Carousel>
        <Slide>
          <DummyVideo src={DummyVideoImg} />
        </Slide>
        <Slide>
          <DummyVideo src={DummyVideoImg} />
        </Slide>
        <Slide>
          <DummyVideo src={DummyVideoImg} />
        </Slide>
        <Slide>
          <DummyVideo src={DummyVideoImg} />
        </Slide>
      </Carousel>
    </Grid>
);

export default Videos;
