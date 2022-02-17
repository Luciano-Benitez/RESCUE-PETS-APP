import styled from "styled-components";
import allColors from '../variables/Colors';

export const StyleNavBar = styled.nav`
  background-color: ${allColors.colors[3]};
  padding: 7px;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 16%;
  margin: 0;
  
 
  
`;


export const Divmenu= styled.div`
display: flex;
padding-right:100px;
float: right;
font-size:  16px;
text-decoration:none;
font-weight: bold;
margin: 13px;


 

 
`;

export const StyleLi= styled.li`

  margin: 0.6em;
 
  display: flex;
  a {
    color: white};
    &:hover { 
        a{
        color: ${allColors.colors[2]}; }
    }
 

`;