import React from "react";
import { Wrap, Img } from "./Social.styled";

interface SocialLinkProps {
  className?: string;
  linkData: {
    linkUrl: string;
    linkName: string;
    linkImage: {
      file: {
        url: string;
      }
    }
  };
}

const SocialLink = ({ className, linkData }: SocialLinkProps) => (
  <Wrap className={className} href={linkData.linkUrl} target="_blank" rel="noopener noreferrer">
    <Img src={linkData.linkImage.file.url} alt={linkData.linkName} />
  </Wrap>
);

export default SocialLink;
