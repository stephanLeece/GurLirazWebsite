import React from "react";

import {
  Wrap,
  TextWrap,
  Title,
  Description,
  LongDescription,
  LinksWrap,
  Link,
  LinkText,
  Image,
} from "./Release.styled";

interface ReleaseScreenProps {
  className?: string;
  releaseData: {
    title: string;
    image: {
      url: string;
    },
    shortDescription?: string;
    longDescription?: string;
    purchaseLink?: string;
    streamingLink?: string;
  }
}

const Release = ({
  className,
  releaseData: {
    title,
    image,
    shortDescription,
    longDescription,
    purchaseLink,
    streamingLink
  }
}: ReleaseScreenProps) => {
  return (
    <Wrap className={className}>
      <Image src={image.url} />
      <TextWrap>
        {title && <Title>{title}</Title>}
        {shortDescription && <Description>{shortDescription}</Description>}
        {longDescription && <LongDescription>{longDescription}</LongDescription>}
        <LinksWrap>
          {purchaseLink && (
            <Link href={purchaseLink} target="_blank" rel="noopener noreferrer">
              <LinkText>Purchase</LinkText>
            </Link>
          )}
          {streamingLink && (
            <Link href={streamingLink} target="_blank" rel="noopener noreferrer">
              <LinkText>stream</LinkText>
            </Link>
          )}
        </LinksWrap>
      </TextWrap>
    </Wrap>
  );
};

export default Release;
