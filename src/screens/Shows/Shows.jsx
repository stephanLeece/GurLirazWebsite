import React from "react";
import moment from "moment";

import { Grid, ShowSection, ShowList, ShowCard, Image } from "./Shows.styled";
import { H3, P } from "../../components/Typography";

const Shows = ({ upcomingShows, pastShows }) => {
  console.log("upcomingShows", upcomingShows);
  console.log("pastShows", pastShows);
  return (
    <Grid>
    <ShowSection>
    <h1>Upcoming</h1>
      <ShowList>
        {upcomingShows.map(show => (
          <div>
          <p>{show.mainDetails}</p>
            <p>{show.date}</p>
          </div>
        ))}
      </ShowList>
      <h1>Past</h1>
      <ShowList>
        {pastShows.map(show => (
          <div>
          <p>{show.mainDetails}</p>
            <p>{show.date}</p>
          </div>
        ))}
      </ShowList>
     </ShowSection>
    </Grid>
  );
};

export default Shows;
