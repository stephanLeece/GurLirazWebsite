import { compose, withProps, branch, renderNothing } from "recompose";
import { dateHasPassed } from '../../utils/time'

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
  })
);

export default enhance(Shows);
