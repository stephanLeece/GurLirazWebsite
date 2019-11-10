import React from "react";
import { Wrap, Img } from "./Social.styled";

const SocialLink = ({className, linkData}) => (
  <Wrap className={className} href={linkData.linkUrl} target="_blank">
    <Img src={linkData.linkImage.file.url} alt={linkData.linkName}/>
  </Wrap>
);

export default SocialLink;
