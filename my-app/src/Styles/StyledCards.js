import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledCard = styled.div `
  height: 210px;
  width: 190px;
  background-color:  ${
    allColors.colors[3]
};
  border-radius: 4px;
  padding-top: 1em;
  display: inline-flex;
  margin: 1%;
  text-align: center;
  align-items: center;
  transition: top ease 0.5s;
  cursor: pointer;
  text-decoration: none;
  transition: ease-in 0.3s;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px #ddd;
  background: #fff;
  

`;

export const StyledCardContainer = styled.div `
 padding-top: 4em;
 text-align: center;
 height :100%;
 
 
`;
