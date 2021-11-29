import React from "react";
import Markdown from "markdown-to-jsx";

import { Wrap, Title, TextBlock, Text, Image } from "./Home.styled";

const Home = ({ homeScreenData: { contentBlocks }, imageUrls }) => (
  <Wrap>
    <Title>Gur Liraz</Title>
    {contentBlocks &&
      contentBlocks.map((contentBlock) => (
        <TextBlock>
          <Text>
            <Markdown>{contentBlock.text.childMarkdownRemark.html}</Markdown>
          </Text>
          <Image
            src={contentBlock.image.file.url}
            alt={contentBlock.image.title}
          />
        </TextBlock>
      ))}
  </Wrap>
);

export default Home;
