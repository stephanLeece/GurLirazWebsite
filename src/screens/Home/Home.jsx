import React from "react";
import Markdown from "markdown-to-jsx";

import {
  Wrap,
  Title,
  TextBlock,
  Text,
  Image,
  SoundCloudWrap
} from "./Home.styled";

const Home = ({ homeScreenData: {
  contentBlocks
}, imageUrls }) => (
  <Wrap>
    <Title>Gur Liraz</Title>
    {contentBlocks && contentBlocks.map(contentBlock => (
    <TextBlock>
    <Text>
      <Markdown>
        {contentBlock.text.childMarkdownRemark.html}
      </Markdown>
    </Text>
    <Image src={contentBlock.image.file.url} />
  </TextBlock>
    ))}
    <SoundCloudWrap>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/859737146&color=%23c0c0c0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </SoundCloudWrap>
  </Wrap>
);

export default Home;
