import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledPreFooter = styled.div `
  text-align: center;
  height: 100%;
  background-image: url(../Icos/wave.svg);

  display: flex;
`;

export const StyledCard = styled.div `
  height: 210px;
  width: 388px;
  //background-color: #EAE9E9;
  border-radius: 4px;
  padding-top: 1em;
  margin: 1%;
  text-align: center;
  align-items: center;
  transition: top ease 0.5s;
  cursor: pointer;
  text-decoration: none;
  transition: ease-in 0.3s;
  overflow: hidden;
  border-radius: 10px;
  p {
    text-align: left;
    padding: 9px;
    font-size: 12px;
  }

  h1{
    color: #6F8AB7;
  }
`;
