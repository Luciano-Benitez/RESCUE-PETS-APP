import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledDetails = styled.div` //Contenedor
  height: 100%;

  background-color: ${allColors.colors[8]};
  border-radius: 4px;
  padding-top: 1em;
  transition: top ease 0.5s;
  overflow: hidden;
  border-radius: 10px;


  
`;



export const StyledDetailsLeft = styled.div` 
  height: 330% ;
  width: 285px;
  background-color: ${allColors.colors[3]};
  border-radius: 4px;

  h1{
    color:  ${allColors.colors[8]};
    font-size: 26;
  }
  
`;




export const StyledDetailsRight = styled.div` 
  height: 330% ;
  width: 285px;
  background-color: ${allColors.colors[4]};
  border-radius: 4px;

  h2{
    color:  ${allColors.colors[8]};
    font-size: 16;
  }
`;
