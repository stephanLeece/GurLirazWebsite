import React from "react";
import Markdown from "markdown-to-jsx";

import {
  Wrap,
  Title,
  MainText,
  Image,
  AdditionalText
} from "./Home.styled";

const Home = ({ homeScreenData, imageUrls }) => (
  <Wrap>
    <Title>Gur Liraz</Title>
    <MainText>
      <Markdown>
        {homeScreenData.mainDescription.childMarkdownRemark.html}
      </Markdown>
    </MainText>
    <Image src={imageUrls[0]} />
    <AdditionalText>
      <Markdown>
        {homeScreenData.additionalDescription.childMarkdownRemark.html}
      </Markdown>
    </AdditionalText>
    <Image src={imageUrls[1]} />
  </Wrap>
);

export default Home;
