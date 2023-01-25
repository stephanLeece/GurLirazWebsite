import React from "react";

import { Wrap, Title, Release } from "./Releases.styled";

interface ReleasesScreenProps {
  releases: any
}

const Releases = ({ releases }: ReleasesScreenProps) => {
  return (
    <Wrap>
      <Title>Releases</Title>
      {releases.nodes.map((releaseData: any) => <Release releaseData={releaseData} />)}
    </Wrap>
  );
}

export default Releases;
