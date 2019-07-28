import React from "react";

import AppWrapper from "../components/AppWrapper";
import { H1, H2, H3, P } from "../components/Typography";

const Contact = props => (
  <AppWrapper location={props.location}>
    <H1> lovely h1</H1>
    <H2> lovely h2</H2>
    <H3> lovely h3</H3>
    <P> lovely h4</P>
  </AppWrapper>
);

export default Contact;
