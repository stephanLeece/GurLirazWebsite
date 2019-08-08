import React from "react";

import { Grid, ShowSection, ShowList, ShowCard, Image } from "./Shows.styled";
import { H3, P } from '../../components/Typography';

const Shows = () => (
    <Grid>
      <ShowSection>
      <H3>Upcoming</H3>
        <ShowList>
          <ShowCard>
            <P>October 13</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>October 13</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>October 13</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>October 13</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>October 13</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>October 13</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
        </ShowList>
        <H3>Past</H3>
        <ShowList>
          <ShowCard>
            <P>Jan 12</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>Jan 12</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>Jan 12</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>Jan 12</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>Jan 12</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
          <ShowCard>
            <P>Jan 12</P>
            <P>With Amanda Becker @Los Angelitos (Kreuzberg)</P>
          </ShowCard>
        </ShowList>
      </ShowSection>
      <Image />
    </Grid>
);

export default Shows;
