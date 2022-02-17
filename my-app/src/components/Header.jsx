import React, { Fragment } from "react";
import {StyledImg , StyledHeaderContainer, StyledLeft, StyledRight } from '../Styles/StyledHeader.js';
import { Link} from "react-router-dom";
import HomeImage from "../Icos/homeim0.svg"


export default function Header() {
  return ( <Fragment>


<StyledHeaderContainer >
                <StyledLeft>
                    <h2>Lorem ipsum dolor sectet.
                    </h2>
                    <Link to="/">
                        <button className="boton">Ver Menús</button>
                    </Link>
                    <Link to="/contacto">
                        <button className="boton">Contacto</button>
                    </Link>
                </StyledLeft>

                <StyledRight>
                    <StyledImg  src={HomeImage} />
                 
                
                </StyledRight>

                </StyledHeaderContainer >

    </Fragment>
    );
  }
  