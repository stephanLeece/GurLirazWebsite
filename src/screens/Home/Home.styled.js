import styled from "styled-components";

import GridWrap from "../../common/GridWrap";
import { COLORS } from "../../constants/Colors";

const Grid = styled(GridWrap)`
`;

const AboutSection = styled.section`
  grid-column: 1 / -1;
  color: ${COLORS.Grey5};
`;



export { Grid, AboutSection };
