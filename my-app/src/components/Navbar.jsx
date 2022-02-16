import React, {Fragment} from "react";
<<<<<<< HEAD
import Colors from "../variables/Corlos"
import {Link } from "react-router-dom";
=======
// import Colors from "../variables/Corlos"
import {Link} from "react-router-dom";
import {StyleNavBar, StyleLi , Divmenu,Enlacesmenu } from "../variables/Styles";

>>>>>>> b1f22623e28c11cfd202a6a17e08aa1baaf74019
export default function Navbar() {


    return (
        <header >
            <div  style={{
        backgroundColor:'#23282E',
        
      }}>
              
<<<<<<< HEAD
            </div>
            <nav >
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/">Soy Un Refugio</Link>
                    </li>


                    <li>
                        <Link to="/nosotros">Nosotros</Link>
                    </li>

                   

                 </ul>
</nav>
        </header>
=======
                    <StyleNavBar>
                        <ul>
                        <Divmenu>
                            <StyleLi>
                            <Link to="/" >Inicio</Link>
                            </StyleLi>
                            <StyleLi>
                                <Link to="/">Soy Un Refugio</Link>
                            </StyleLi>
                            <StyleLi>
                                <Link to="/nosotros">Sobre Nosotros</Link>
                            </StyleLi>
                            </Divmenu>  </ul>
                    </StyleNavBar>
                
            </header>
        </Fragment>
>>>>>>> b1f22623e28c11cfd202a6a17e08aa1baaf74019
    );
}
