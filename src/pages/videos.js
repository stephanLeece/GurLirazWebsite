import React from "react";

import AppWrapper from "../components/AppWrapper";
import VideosScreen from "../screens/Videos";

const Videos = props => (
  <AppWrapper location={props.location}>
    <VideosScreen />
  </AppWrapper>
);

export default Videos;
