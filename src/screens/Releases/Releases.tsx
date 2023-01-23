import React from "react";

import { Wrap, Title, TextBlock, Text, Image } from "./Releases.styled";

interface ReleasesScreenProps {
  releases: any
}

const Releases = ({ releases }: ReleasesScreenProps) => {
  console.log({ releases })
  return (
    <Wrap>
      <Title>Releases</Title>
      {releases.nodes.map((release: any) => <p>{release.title}</p>)}
    </Wrap>
  );
}

export default Releases;
