import styled from "styled-components";

import { H2, P } from "../../common/Typography";
import GridWrap from "../../common/GridWrap";
import { COLORS } from "../../constants/Colors";
import { BREAK_POINTS } from "../../constants/BreakPoints";
import ReleaseComponent from './Release'
const Wrap = styled(GridWrap)`
display: flex;
flex-direction: column;
`;

const Title = styled(H2)`
  font-size: 48px;
  color: ${COLORS.TextLight};
  margin-bottom: 16px;
`;

const Release = styled(ReleaseComponent)``;

export { Wrap, Title, Release };
