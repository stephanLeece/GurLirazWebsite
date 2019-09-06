import React from "react";
import moment from 'moment';

import { Wrap, Date, ShowName, Venue } from "./ShowCard.styled";

const ShowCard = ({
    className,
    showDetails: { date, mainDetails, additionalDetails }
}) => (
    <Wrap className={className}>
        <Date>{date && moment(date).format('MMM Do YYYY')}</Date>
        <ShowName>{additionalDetails}</ShowName>
        <Venue>{mainDetails}</Venue>
    </Wrap>
);

export default ShowCard;
