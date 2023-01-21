import React from "react";
import moment from 'moment';

import { Wrap, DetailWrap, Date, ShowName, Venue } from "./ShowCard.styled";

interface ShowCardProps {
    className?: string;
    showDetails: { date: string; mainDetails: string; additionalDetails: string; };
}

const ShowCard = ({
    className,
    showDetails: { date, mainDetails, additionalDetails }
}: ShowCardProps) => (
    <Wrap className={className}>
        <DetailWrap>
            <Date>{date ? moment(date).format('MMM Do YYYY') : 'TBA'} -</Date>
            <Venue>{mainDetails}</Venue>
        </DetailWrap>
        <ShowName>{additionalDetails}</ShowName>
    </Wrap>
);

export default ShowCard;
