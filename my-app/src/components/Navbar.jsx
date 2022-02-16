import React, {Fragment} from "react";
import Colors from "../variables/Corlos"
import {Link } from "react-router-dom";
export default function Navbar() {


    return (
        <header >
            <div  style={{
        backgroundColor:'#23282E',
        
      }}>
              
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
    );
}
