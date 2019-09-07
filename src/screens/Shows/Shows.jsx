import React from "react";

import { Wrap, ShowSection, List, ImageBlock, Image } from "./Shows.styled";

const Shows = ({ upcomingShows, pastShows, imageUrls }) => {
  console.log(imageUrls)
  return (
    <Wrap>
      <ShowSection>
        <List title="Upcoming Shows" shows={upcomingShows.reverse()} />
        <List title="Past Shows" shows={pastShows} />
      </ShowSection>
      <ImageBlock>
        {imageUrls.map(imageUrl  => <Image src={imageUrl} />)}
      </ImageBlock>
    </Wrap>
  );
};

export default Shows;
