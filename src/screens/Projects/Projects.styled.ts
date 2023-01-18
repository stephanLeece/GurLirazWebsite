import styled from "styled-components";

import ProjectComponent from "./Project";
import GridWrap from "../../common/GridWrap";

const Grid = styled(GridWrap)`
  margin: 0;
  
`;

const Project = styled(ProjectComponent)`
  grid-column: 1 / -1;
  margin-bottom: 32px;
`;

export { Grid, Project };
