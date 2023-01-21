import React from "react";

import { Wrap, Slide, Gap } from "./Carousel.styled";

const Carousel = ({ className, children }) => (
    <Wrap className={className}>
        {children && children.map(child => (
        <Slide>{child}</Slide>
        ))}
        <Gap />
    </Wrap>
);

export default Carousel;
