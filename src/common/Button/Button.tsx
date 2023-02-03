import React from "react";

import { Wrap } from "./Button.styled";
import { H3 } from "../Typography";
interface LinkButtonProps {
    className?: string;
    children: React.ReactNode;
}

const Button = ({ className, children }: LinkButtonProps) => (
    <Wrap className={className}>
        <H3>{children}</H3>
    </Wrap>
);

export default Button;
