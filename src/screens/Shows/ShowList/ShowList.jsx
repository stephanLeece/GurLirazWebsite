import React from "react";

import { Wrap, Title, Card } from "./Showlist.styled";

const ShowList = ({ className, title, shows }) => (
    <Wrap className={className}>
        <Title>{title}</Title>
        {shows.map(show => <Card showDetails={show} />)}
    </Wrap>
);

export default ShowList;