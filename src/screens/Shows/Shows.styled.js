import styled from "styled-components";

import GridWrap from "../../components/GridWrap";

const Grid = styled(GridWrap)``;

const ShowSection = styled.div`
   grid-column: auto / span 6;
`;

const Image = styled.img`
  grid-column: auto / span 6;
`;

const ShowList = styled.section`
 
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

export { Grid, ShowList, ShowCard, ShowSection, Image };
