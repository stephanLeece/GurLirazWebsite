import { compose, withProps } from "recompose";
import { dateHasPassed } from "../../utils/time";

import Shows from "./Shows";

const enhance = compose(
  withProps(({ rawShows: { edges } }) => {
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
  }),
  withProps(({ photos }) => {
    return {
      imageUrls: photos.map(photo => { return {
        url: photo.file.url,
        title: photo.title,
      }})
    };
  })
);

export default enhance(Shows);
