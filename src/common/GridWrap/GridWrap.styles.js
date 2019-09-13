import styled from "styled-components";

import { BREAK_POINTS } from "../../constants/BreakPoints";

const Wrap = styled.div`
  display: grid;
  margin: 0 8px;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 8px;
  @media ${BREAK_POINTS.laptopMin} {
    margin: 0 16px;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 16px;
  }
`;

export { Wrap };
