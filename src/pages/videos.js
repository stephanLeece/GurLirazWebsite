import React from "react";

import AppWrapper from "../components/AppWrapper";
import DummyVideoImg from "./Assets/dummyVideo.png";
import { Grid, Carousel, Slide, DummyVideo } from "../screens/videos.styled";

const Videos = props => (
  <AppWrapper location={props.location}>
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
  </AppWrapper>
);

export default Videos;
