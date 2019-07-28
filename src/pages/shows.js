import React from "react";

import AppWrapper from "../components/AppWrapper";
import { Grid, ShowList, ShowCard } from "../screens/shows.styled";

const Shows = props => (
  <AppWrapper location={props.location}>
    <Grid>
    Upcoming
      <ShowList>
        <ShowCard>
          <p>October 13</p>
          <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
        </ShowCard>
        <ShowCard>
          <p>October 13</p>
          <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
        </ShowCard>
        <ShowCard>
          <p>October 13</p>
          <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
        </ShowCard>
        <ShowCard>
          <p>October 13</p>
          <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
        </ShowCard>
        <ShowCard>
          <p>October 13</p>
          <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
        </ShowCard>
        <ShowCard>
          <p>October 13</p>
          <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
        </ShowCard>
      </ShowList>
      Past
      <ShowList>
      <ShowCard>
        <p>Jan 12</p>
        <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
      </ShowCard>
      <ShowCard>
        <p>Jan 12</p>
        <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
      </ShowCard>
      <ShowCard>
        <p>Jan 12</p>
        <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
      </ShowCard>
      <ShowCard>
        <p>Jan 12</p>
        <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
      </ShowCard>
      <ShowCard>
        <p>Jan 12</p>
        <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
      </ShowCard>
      <ShowCard>
        <p>Jan 12</p>
        <p>With Amanda Becker @Los Angelitos (Kreuzberg)</p>
      </ShowCard>
    </ShowList>
    </Grid>
  </AppWrapper>
);

export default Shows;
