import React from "react";
import Markdown from "markdown-to-jsx";

import { Wrap, Title, TextBlock, Text, Image, SoundCloudWrap } from "./Home.styled";

const Home = ({ homeScreenData, imageUrls }) => (
  <Wrap>
    <Title>Gur Liraz</Title>
    <TextBlock>
      <Text>
        <Markdown>
          {homeScreenData.mainDescription.childMarkdownRemark.html}
        </Markdown>
      </Text>
      <Image src={imageUrls[0]} />
    </TextBlock>
    <TextBlock>
      <Image src={imageUrls[1]} />
      <Text>
        <Markdown>
          {homeScreenData.additionalDescription.childMarkdownRemark.html}
        </Markdown>
      </Text>
    </TextBlock>
    <SoundCloudWrap>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/859737146&color=%23a8a8a8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </SoundCloudWrap>
  </Wrap>
);

export default Home;
