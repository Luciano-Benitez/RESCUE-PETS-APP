import styled from "styled-components";
import allColors from '../variables/Colors';



export const StyleInput= styled.input`

  margin: 0.6em;
 
  display: flex;
  a {
    color: white};
    &:hover { 
        a{
        color: ${allColors.colors[2]}; }
    }
 

`;