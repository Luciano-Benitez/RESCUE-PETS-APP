import styled from "styled-components";
import allColors from "../variables/Colors";

export const DivContainer = styled.div`
  position: relative;
  top: 11rem;
  width: 100vw;
  min-height: 83vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  .text-center {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  img{
      width: 35rem;
      height: auto;
      position: relative;
      left: 50rem;
      bottom: 21rem;
  }

  .formulario {
    width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    fieldset {
      border: 1px solid black;
      margin-bottom: 2rem;
      min-width: 50rem;
      legend {
        background-color: ${allColors.colors[1]};
        width: 100%;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        font-weight: 900;
        padding: 1rem;
        margin-bottom: 2rem;
      }
    }
    .campo {
      display: flex;
      margin-bottom: 2rem;
      align-items: center;
      label {
        flex-basis: 7rem;
        margin-left: 1rem;
      }
    }
    .campo input:not([type="radio"]),
    .campo textarea,
    .campo select {
      flex: 1;
      border: 1px solid #e1e1e1;
      padding: 1rem;
    }
  }
`;

export const StyledButton = styled.input`
  background-color: ${allColors.colors[3]};
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
  padding: 1rem;
  transition: background-color 0.3s ease-out;
  text-align: center;
  border: none;
  width: 80%;
  margin-top: 2rem;

:hover {
  background-color: ${allColors.colors[2]};
  cursor: pointer;
}
`
