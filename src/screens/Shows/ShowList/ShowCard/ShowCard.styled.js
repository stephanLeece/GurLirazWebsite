import styled from "styled-components";

import { H4, P } from "../../../../common/Typography";
import { COLORS } from "../../../../constants/Colors";

const Wrap = styled.div`
    background: ${COLORS.BackgroundLight};
    padding: 16px;
`;

const Date = styled(P)`
    margin-bottom: 8px;
`;

const ShowName = styled(H4)`
    margin-bottom: 8px;
`;

const Venue = styled(P)`

`;

export { Wrap, Date, ShowName, Venue  };
