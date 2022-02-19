import styled from "styled-components";
import allColors from "../variables/Colors";

export const DivContainer = styled.div`
  //position: relative;
  top: 11rem;
  width: 100%;
  margin: 20px;;
  min-height: 83vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
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

    input {
    width: 100%;
    height: 50px;
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

textarea{
  width: 100%;
    height: 50px;
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

select{
  width: 100%;
    height: 50px;
    background: #ddf4ff !important;
    color: gray !important;
    padding-left: 5px !important;
    margin-left: 10px !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-color: ${allColors.colors[8]}  !important;
    border-width: 3px !important;
    border-radius: 5px !important;
    cursor: pointer;
}


    fieldset {
      padding: 20px;
      margin-bottom: 2rem;
      min-width: 120%;
      border: none;
      border-radius: 10px;
      box-shadow: 0 0 15px #ddd;
      legend {
        background-color: ${allColors.colors[3]};
        width: 100%;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        font-weight: 900;
        padding: 1rem;
        margin-bottom: 2rem;
        border-radius: 4px;
        
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
