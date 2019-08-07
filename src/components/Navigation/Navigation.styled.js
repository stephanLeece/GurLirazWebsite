import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0;
  background: rgba(225,225,225,1);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;


const Image = styled.div`
  height: 100%;
  background: black;
`;

const LinkWrap = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  margin: 24px 0;
`;

export { Wrap, Image, LinkWrap };
