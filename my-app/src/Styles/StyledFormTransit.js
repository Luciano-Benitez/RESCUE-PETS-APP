import styled from "styled-components";
import allColors from "../variables/Colors";

export const DivContainer = styled.div`
  //position: relative;
  top: 15rem;
  width: 100%;

  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 7rem;
  background-position: 80% 75%;
  h1 {
    color: ${allColors.colors[8]};
    margin-top: 0;
  }

  .formulario {
    width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputForm {
    width: 46rem;
    height: 40px;
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color:${allColors.colors[8]} !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    cursor: pointer;
    }

    textarea {
      background: #ddf4ff !important;
      color: gray !important;
      padding-left: 5px !important;
      margin-left: 10px !important;
      border-top: 0px !important;
      border-left: 0px !important;
      border-right: 0px !important;
      border-color: ${allColors.colors[8]} !important;
      border-width: 3px !important;
      border-radius: 5px !important;
      cursor: pointer;
    }

    button {
      background-color: ${allColors.colors[3]};
      display: block;
      color: #fff;
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

      :disabled{
      opacity: 40%;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      align-items: center;

      label {
        padding-bottom: 1rem;
        font-size: 1.5rem;
        text-align: center;
      }
    }
    .errors{
      p{
        color: red;
      }
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
`;
