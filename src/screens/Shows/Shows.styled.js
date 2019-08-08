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
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const ShowCard = styled.div`
    background: rgba(225,225,225,0.75);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 16px;
  margin: 16px;
`;

export { Grid, ShowList, ShowCard, ShowSection, Image };
