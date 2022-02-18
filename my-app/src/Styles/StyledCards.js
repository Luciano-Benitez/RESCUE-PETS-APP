import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyledCard = styled.div`
  height: 310px;
  width: 285px;
  background-color: ${allColors.colors[3]};
  border-radius: 4px;
  padding-top: 1em;
  margin: 1%;
  transition: top ease 0.5s;
  cursor: pointer;
  text-decoration: none;
  transition: ease-in 0.3s;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px #ddd;
  background: #fff;
  text-align: center;
`;

export const StyledCardContainer = styled.div`
  padding-top: 3em;
  text-align: center;
  height: 100%;
  color: ${allColors.colors[8]};
  display: flex;
`;

export const ImgCard = styled.img`
 height :70%;

 
`;
