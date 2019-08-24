import styled from "styled-components";

import ProjectComponent from "./Project";
import GridWrap from "../../components/GridWrap";

const Grid = styled(GridWrap)`
`;

const Project = styled(ProjectComponent)`
  grid-column: 1 / -1;
`;

export { Grid, Project };
