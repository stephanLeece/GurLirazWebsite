import styled from "styled-components";

import { H4, P } from "../../../../common/Typography";

const Wrap = styled.div`
    background: rgba(225, 225, 225, 1);
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
