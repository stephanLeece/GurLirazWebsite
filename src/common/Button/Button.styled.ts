import styled from "styled-components";

import { COLORS } from "../../constants/Colors";

const Wrap = styled.button` 
    background: ${COLORS.BackgroundLight};
	color: ${COLORS.TextDark};
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    border: 2px solid ${COLORS.BackgroundLight};
    padding: 8px;
    border-radius: 8px;
    min-width: 128px;
`;

export { Wrap };
