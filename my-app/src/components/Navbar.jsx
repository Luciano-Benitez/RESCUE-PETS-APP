import React, {Fragment} from "react";
// import Colors from "../variables/Corlos"
import {Link} from "react-router-dom";
import {StyleNavBar, StyleLi , Divmenu} from "../variables/Styles";

export default function Navbar() {
    return (
        <Fragment>
            <header>
              
                    <StyleNavBar>
                        <ul>
                        <Divmenu>
                            <StyleLi>
                                <Link to="/">Inicio</Link>
                            </StyleLi>
                            <StyleLi>
                                <Link to="/">Soy Un Refugio</Link>
                            </StyleLi>
                            <StyleLi>
                                <Link to="/nosotros">Nosotros</Link>
                            </StyleLi>
                            </Divmenu>  </ul>
                    </StyleNavBar>
                
            </header>
        </Fragment>
    );
}
