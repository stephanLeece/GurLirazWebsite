import styled from "styled-components";

import GridWrap from "../../common/GridWrap";
import ShowList from './ShowList';

const Grid = styled(GridWrap)``;

const ShowSection = styled.div`
  grid-column: auto / span 4;
`;

const Image = styled.img`
  grid-column: auto / span 8;
`;

const List = styled(ShowList)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export { Grid, ShowSection, List, Image };
