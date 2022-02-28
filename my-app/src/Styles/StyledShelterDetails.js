import styled from "styled-components";
import allColors from "../variables/Colors";
import { Link } from "react-router-dom";

export const StyledDiv = styled.div`
  margin-top: 10.1rem;
`;
export const StyledNav = styled.div`
  background-color: ${allColors.colors[0]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  font-size: 2rem;

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 3rem;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover{
      color: ${allColors.colors[1]};
      font-weight: 700;
  }
`;

export const DivContenedor = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`

export const FormStyle = styled.form`
  background-color: ${allColors.colors[3]};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  padding: 1rem;
  border-bottom: 1px solid black;
`
