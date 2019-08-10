import React from "react";

import AppWrapper from "../components/AppWrapper";
import VideosScreen from "../screens/Videos";

const Videos = props => (
  <AppWrapper location={props.location}>
    <VideosScreen videos = {props.data.allContentfulVideo}/>
  </AppWrapper>
);

export default Videos;

export const videoQuery = graphql`
  query VideoQuery {
    allContentfulVideo {
      edges {
        node {
          title
          youtubeVideoId
        }
      }
    }
  }
`;
