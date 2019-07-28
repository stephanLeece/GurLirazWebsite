import React from "react";

import AppWrapper from "../components/AppWrapper";
import { Grid, AboutSection, ContactSection } from "../screens/home.styled";
import DummyContact from "./Assets/dummyContact.png";

const Home = props => (
  <AppWrapper location={props.location}>
    <Grid>
      <AboutSection>
        <p>
          Born in Tel Aviv, Israel, in 1988, Jazz Guitarist Gur Liraz has
          attended the prestigious Thelma Yellin High School Jazz major, where
          he studied with musicians from the Israeli scene such as Amit Golan,
          Yuval cohen, Erez Barnoy Amos Hoffman and many more. In edition, he
          spent 4 years during that time as a student with Jazz guitar master,
          Ofer Ganor.
        </p>
        <br />
        <p>
          Since around 2004 he has been a part of the lively Tel-Aviv Jazz
          scene. During that time he has performed in Jazz clubs, bars and
          different venues, recorded and taught guitar and music, both privately
          and in music schools.
        </p>
        <br />
        <p>
          During that time Gur also took up the classical guitar, studying under
          internationally acclaimed guitarists Seth Josel and Ruben Saroussi,
          taking third Place at the young guitarists competition of the Hebrew
          Academy in Jetusalem.
        </p>
        <br />
        <p>
          In 2013, after half a year in New York, taking lessons with guitar
          legend Peter Bernstein, Gur moved to Berlin and soon became involved
          in its rapidly evolving Jazz scene. He performs regularly in some of
          the city's most visited jazz clubs, such as Zig Zag, B-Flat, Donau 115
          and Kunstfabrik Schlot.
        </p>
        <br />
      </AboutSection>
      <ContactSection>
        <img src={DummyContact} />
      </ContactSection>
    </Grid>
  </AppWrapper>
);

export default Home;
