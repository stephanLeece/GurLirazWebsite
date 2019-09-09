import styled from "styled-components";

import { H1, P } from "../../common/Typography";
import GridWrap from "../../common/GridWrap";
import { COLORS } from "../../constants/Colors";
import { BREAK_POINTS } from "../../constants/BreakPoints";

const Wrap = styled(GridWrap)`
max-width: 100%;
  > * {
    grid-column: 1 / -1;
    margin-bottom: 16px;
  }
`;

const Title = styled(H1)`
  color: ${COLORS.TextLight};
  @media ${BREAK_POINTS.desktopMin} {
    display: none;
  }
`;

const MainText = styled(P)`
  color: ${COLORS.TextLight};
`;

const Image = styled.img`
 width: 100%;
`;

const AdditionalText = styled(P)`
  color: ${COLORS.TextLight};
`;

export { Wrap, Title, MainText, Image, AdditionalText };
