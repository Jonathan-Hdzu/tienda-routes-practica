import styled from "styled-components"
import {colors} from "./theme"
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ;
  color: ${colors.primary};
  /* color: #BF4F74; */
  margin: 0 1em;
  padding: 0.25em 1em;
  
`;

export const CenteredCont = styled.div`
height: 100vh;
width: 60%;
margin: 0 auto;
`;

export const CenterInfo = styled.div `
justify-content: center;
text-align: center;

`