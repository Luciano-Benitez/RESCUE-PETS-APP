import styled from "styled-components";
import allColors from "../variables/Colors";

export const StyleNavBar = styled.nav`
  background-color: ${allColors.colors[3]};
  padding: 0px;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 16%;
 
 
`;

export const Divmenu = styled.div`
  display: flex;
  padding-right: 6px;
  float: right;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  margin:6px;
  
 

`;

export const StyleLi = styled.li`
  margin: 1em;
  display: flex;
  width: 160px;
  white-space: nowrap;
  a {
    color: white;
   
    display: flex;
   
  }
     
  
 
  &:hover {
    a {
      color: ${allColors.colors[4]};
     
    }
  }
  
 

 


`;
