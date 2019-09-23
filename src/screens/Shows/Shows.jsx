import React from "react";

import { Wrap, ShowListSection, ShowList, ImageSection, Image } from "./Shows.styled";

const Shows = ({ upcomingShows, pastShows, imageUrls }) => (
  <Wrap>
    <ShowListSection>
      <ShowList title="Upcoming Shows" shows={upcomingShows.reverse()} />
      <ShowList title="Past Shows" shows={pastShows} />
    </ShowListSection>
    <ImageSection>
      {imageUrls.map(imageUrl => (
        <Image src={imageUrl} />
      ))}
    </ImageSection>
  </Wrap>
);

export default Shows;
