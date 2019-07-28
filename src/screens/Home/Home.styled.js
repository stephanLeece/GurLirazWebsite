import styled from "styled-components";

import { BREAK_POINTS } from "../../constants/BreakPoints";
import GridWrap from "../../components/GridWrap";

const Grid = styled(GridWrap)``;

const AboutSection = styled.section`
  grid-column: 1 / -1;
  @media ${BREAK_POINTS.laptop} {
    grid-column: auto / span 6;
  }
`;

const ContactSection = styled.section`
  grid-column: 1 / -1;
  @media ${BREAK_POINTS.laptop} {
    grid-column: auto / span 6;
  }
  img {
      width: 100%;
      object-fit: cover;
  }
`;

export { Grid, AboutSection, ContactSection };
