import React from "react";
import Markdown from "markdown-to-jsx";

import { Wrap, Title, TextBlock, Text, Image } from "./Home.styled";

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
  </Wrap>
);

export default Home;
