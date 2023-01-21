import React from "react";

import {
  Wrap,
  ShowListSection,
  ShowList,
  ImageSection,
  Image
} from "./Shows.styled";

import { dateHasPassed } from "../../utils/time";

interface ShowsProps {
  rawShows: any; photos: any;
}

const getShowDetails = ({ rawShows: { edges } }: any) => {
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

const getImageUrls = ({ photos }: { photos: Array<{ file: { url: string }, title: string }> }) => {
  return {
    imageUrls: photos.map((photo) => {
      return {
        url: photo.file.url,
        title: photo.title
      };
    })
  };
};

const Shows = ({ rawShows, photos }: ShowsProps) => {
  const { upcomingShows, pastShows } = getShowDetails({ rawShows });
  const { imageUrls } = getImageUrls({ photos });
  return (
    <Wrap>
      <ShowListSection>
        <ShowList title="Upcoming Shows" shows={upcomingShows.reverse()} />
        <ShowList title="Past Shows" shows={pastShows} />
      </ShowListSection>
      <ImageSection>
        {imageUrls.map((image: { url: string, title: string }) => (
          <Image src={image.url} alt={image.title} />
        ))}
      </ImageSection>
    </Wrap>
  );
};

export default Shows;
