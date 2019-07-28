import React from "react";

import AppWrapper from "../components/AppWrapper";
import HomeScreen from "../screens/Home";

const Home = props => (
  <AppWrapper location={props.location}>
    <HomeScreen />
  </AppWrapper>
);

export default Home;
