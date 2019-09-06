import React from "react";

import { Wrap, Slide } from "./Carousel.styled";

const Carousel = ({ className, children }) => (
    <Wrap className={className}>
        {children.map(child => (
        <Slide>{child}</Slide>
        ))}
    </Wrap>
);

export default Carousel;
