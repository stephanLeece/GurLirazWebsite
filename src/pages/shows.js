import React from "react";

import AppWrapper from "../components/AppWrapper";
import ShowsScreen from "../screens/Shows";

const Shows = props => (
  <AppWrapper location={props.location}>
    <ShowsScreen />
  </AppWrapper>
);

export default Shows;
