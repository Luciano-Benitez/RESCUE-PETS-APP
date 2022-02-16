import styled from "styled-components";
import allColors from "./Corlos";

export const StyleNavBar = styled.nav`
  background-color: ${allColors.colors[4]};
  padding: 7px;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 10%;
  
  } 
`;


export const Divmenu= styled.div`
display: flex;
padding: 14px;
float: right;

}`;

export const StyleLi= styled.li`

  margin: 0.3em;
  display: flex;
 
 

}`;


export default {StyleNavBar  , StyleLi, Divmenu};
