import React, {Fragment} from "react";
// import Colors from "../variables/Corlos"
import {NavLink} from "react-router-dom";
import {StyleNavBar, StyleLi , Divmenu } from '../Styles/StyledNav';
import { StyleInput} from '../Styles/StyledSearch'
export default function Navbar() {
    return (
        <Fragment>
            <header>
              
                    <StyleNavBar>
                        <ul>
                        <Divmenu>
                            <StyleLi>
                            <NavLink activeClassName="active" to="/" >Inicio</ NavLink>
                            </StyleLi>
                            <StyleLi>
                                <NavLink activeClassName="active" to="/Login">Soy Un Refugio</NavLink>
                            </StyleLi>
                            <StyleLi>
                                <NavLink activeClassName="active" to="/nosotros">Sobre Nosotros</NavLink>
                            </StyleLi> <StyleInput name='Search' placeholder='Escriba elemento a buscar'></StyleInput>
                            </Divmenu> 
                            </ul>
                    </StyleNavBar>
                
            </header>
        </Fragment>
    );
}
