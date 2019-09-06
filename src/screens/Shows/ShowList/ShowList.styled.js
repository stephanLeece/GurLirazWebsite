import styled from "styled-components";

import { H2 } from "../../../common/Typography";
import ShowCard from './ShowCard';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled(H2)`
    margin-bottom: 16px;
`;

const Card = styled(ShowCard)`
    margin-bottom: 16px;
    width: 100%;
`;



export { Wrap, Title, Card };
