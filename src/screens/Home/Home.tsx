import React from "react";
import Markdown from "markdown-to-jsx";

import { Wrap, Title, TextBlock, Text, Image } from "./Home.styled";

interface HomeScreenProps {
  homeScreenData: {
    contentBlocks: Array<any>
  };
}

const Home = ({ homeScreenData: { contentBlocks } }: HomeScreenProps) => (
  <Wrap>
    <Title>Gur Liraz</Title>
    {contentBlocks &&
      contentBlocks.map((contentBlock) => (
        <TextBlock>
          <Text>
            <Markdown>{contentBlock.text.text}</Markdown>
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
