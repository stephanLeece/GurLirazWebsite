import React from "react";

import { Grid, ShowSection, List, Image } from "./Shows.styled";

const Shows = ({ upcomingShows, pastShows }) => {
  return (
    <Grid>
      <ShowSection>
        <List title="Upcoming Shows" shows={upcomingShows.reverse()} />
        <List title="Past Shows" shows={pastShows} />
      </ShowSection>
    </Grid>
  );
};

export default Shows;
