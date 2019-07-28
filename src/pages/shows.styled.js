import styled from "styled-components";

import { BREAK_POINTS } from "../constants/BreakPoints";
import GridWrap from "../components/GridWrap";

const Grid = styled(GridWrap)``;

const ShowList = styled.section`
  grid-column: 1 / -1;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const ShowCard = styled.div`
  border: 1px solid black;
  padding: 16px;
  margin: 16px;
`;

export { Grid, ShowList, ShowCard };
