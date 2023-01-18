import React from "react";

import {
  Wrap,
  ShowListSection,
  ShowList,
  ImageSection,
  Image
} from "./Shows.styled";

import { dateHasPassed } from "../../utils/time";

const getShowDetails = ({ rawShows: { edges } }) => {
  const upcomingShows = [];
  const pastShows = [];
  for (var i = 0; i < edges.length; i++) {
    if (dateHasPassed(edges[i].node.date)) {
      pastShows.push(edges[i].node);
    } else {
      upcomingShows.push(edges[i].node);
    }
  }
  return {
    upcomingShows,
    pastShows
  };
};

const getImageUrls = ({ photos }) => {
  return {
    imageUrls: photos.map((photo) => {
      return {
        url: photo.file.url,
        title: photo.title
      };
    })
  };
};

const Shows = ({ rawShows, photos }) => {
  const { upcomingShows, pastShows } = getShowDetails({ rawShows });
  const { imageUrls } = getImageUrls({ photos });
  return (
    <Wrap>
      <ShowListSection>
        <ShowList title="Upcoming Shows" shows={upcomingShows.reverse()} />
        <ShowList title="Past Shows" shows={pastShows} />
      </ShowListSection>
      <ImageSection>
        {imageUrls.map((image) => (
          <Image src={image.url} alt={image.title} />
        ))}
      </ImageSection>
    </Wrap>
  );
};

export default Shows;
