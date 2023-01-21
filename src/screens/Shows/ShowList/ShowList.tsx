import React from "react";

import { Wrap, Title, Card } from "./ShowList.styled";

interface ShowListProps {
    className?: string;
    title: string;
    shows: any[];
}

const ShowList = ({ className, title, shows }: ShowListProps) => (
    <Wrap className={className}>
        <Title>{title}</Title>
        {shows.map(show => <Card showDetails={show} />)}
    </Wrap>
);

export default ShowList;
