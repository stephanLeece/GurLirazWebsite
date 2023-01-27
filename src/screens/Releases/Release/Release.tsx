import React from "react";
import Button from "../../../common/Button";

import {
  Wrap,
  TextWrap,
  Title,
  Description,
  LongDescription,
  LinksWrap,
  Link,
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
              <Button>Purchase</Button>
            </Link>
          )}
          {streamingLink && (
            <Link href={streamingLink} target="_blank" rel="noopener noreferrer">
              <Button>stream</Button>
            </Link>
          )}
        </LinksWrap>
      </TextWrap>
    </Wrap>
  );
};

export default Release;
