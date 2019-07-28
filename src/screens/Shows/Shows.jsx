import React from "react";

import { Grid, ShowSection, ShowList, ShowCard, Image } from "./Shows.styled";

const Shows = () => (
    <Grid>
      <ShowSection>
        <ShowList>
          Upcoming
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
      </ShowSection>
      <Image />
    </Grid>
);

export default Shows;
