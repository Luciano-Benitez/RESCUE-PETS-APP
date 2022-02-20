import React, {Fragment} from "react";
import {StyledCard, StyledCardContainer, ImgCard} from '../Styles/StyledCards.js';
//import Img from "../Icos/homeim1.svg"

export default function Cards({pets}) {
    return (<Fragment>
        <br/>
        <StyledCardContainer key={
            Math.random(5)
        }> {
            pets.length  ? pets.map((p) => (<Fragment>

                <StyledCard key={
            Math.random(5)
        }>
                    <h1>{p.name}</h1>
                    
                    {/* <p>{p.description}</p> */}
                    <ImgCard src={p.image}/>

                    <br/>
                </StyledCard>

                
            </Fragment>)) : (<h1>             Cargando datos</h1>)
        } </StyledCardContainer>
    </Fragment>);


}
