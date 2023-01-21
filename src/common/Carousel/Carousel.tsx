import React from "react";

import { Wrap, Slide, Gap } from "./Carousel.styled";

interface CarouselProps {
    className?: string;
    children: Array<React.ReactNode>;
}

const Carousel = ({ className, children }: CarouselProps) => (
    <Wrap className={className}>
        {children && children.map(child => (
            <Slide>{child}</Slide>
        ))}
        <Gap />
    </Wrap>
);

export default Carousel;
