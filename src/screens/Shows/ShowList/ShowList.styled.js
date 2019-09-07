import styled from "styled-components";

import { H1 } from "../../../common/Typography";
import { COLORS } from "../../../constants/Colors";
import ShowCard from './ShowCard';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled(H1)`
    margin-bottom: 16px;
    color: ${COLORS.Grey5};
`;

const Card = styled(ShowCard)`
    margin-bottom: 16px;
    width: 100%;
`;



export { Wrap, Title, Card };
