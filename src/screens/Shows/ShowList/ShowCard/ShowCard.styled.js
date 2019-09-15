import styled from "styled-components";

import { H4, P } from "../../../../common/Typography";
import { COLORS } from "../../../../constants/Colors";

const Wrap = styled.div`
    background: ${COLORS.BackgroundLight};
    padding: 16px;
`;

const DetailWrap = styled.div`
   display: flex;
   margin-bottom: 8px;
   flex-wrap: wrap;
`;

const Date = styled(P)`
    margin-right: 4px;
`;

const Venue = styled(P)``;

const ShowName = styled(H4)``;



export { Wrap, DetailWrap, Date, Venue, ShowName };
