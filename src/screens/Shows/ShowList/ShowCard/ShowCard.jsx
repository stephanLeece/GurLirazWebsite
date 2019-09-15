import React from "react";
import moment from 'moment';

import { Wrap, DetailWrap, Date, ShowName, Venue } from "./ShowCard.styled";

const ShowCard = ({
    className,
    showDetails: { date, mainDetails, additionalDetails }
}) => (
    <Wrap className={className}>
    <DetailWrap>
        <Date>{date && moment(date).format('MMM Do YYYY')} -</Date>
        <Venue>{mainDetails}</Venue>
        </DetailWrap>
        <ShowName>{additionalDetails}</ShowName>
    </Wrap>
);

export default ShowCard;
