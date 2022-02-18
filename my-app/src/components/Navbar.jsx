import React, {Fragment} from "react";
// import Colors from "../variables/Corlos"
import {Link} from "react-router-dom";
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
                            <Link to="/" >Inicio</Link>
                            </StyleLi>
                            <StyleLi>
                                <Link to="/Login">Soy Un Refugio</Link>
                            </StyleLi>
                            <StyleLi>
                                <Link to="/nosotros">Sobre Nosotros</Link>
                            </StyleLi> <StyleInput name='Search' placeholder='Escriba elemento a buscar'></StyleInput>
                            </Divmenu> 
                            </ul>
                    </StyleNavBar>
                
            </header>
        </Fragment>
    );
}
