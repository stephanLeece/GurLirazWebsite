import React from "react";

import { Wrap, ShowListSection, ShowList, ImageSection, Image } from "./Shows.styled";

const Shows = ({ upcomingShows, pastShows, imageUrls }) => (
  <Wrap>
    <ShowListSection>
      <ShowList title="Upcoming Shows" shows={upcomingShows.reverse()} />
      <ShowList title="Past Shows" shows={pastShows} />
    </ShowListSection>
    <ImageSection>
      {imageUrls.map(image => (
        <Image src={image.url} alt={image.title} />
      ))}
    </ImageSection>
  </Wrap>
);

export default Shows;
