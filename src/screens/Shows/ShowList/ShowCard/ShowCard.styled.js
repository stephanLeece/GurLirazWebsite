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
    color: ${COLORS.TextMed};
`;

const Venue = styled(P)`
    color: ${COLORS.TextMed};
`;

const ShowName = styled(H4)`
    color: ${COLORS.TextMed};
`;



export { Wrap, DetailWrap, Date, Venue, ShowName };
