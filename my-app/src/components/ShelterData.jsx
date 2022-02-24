import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import {
    StyledCard,
    StyledCardContainer,
    ImgCard,
  } from "../Styles/StyledCards.js";


const ShelterData = ({Data}) => {
  return (
    <div>
        {
           <StyledCardContainer key={Math.random(5)}> 
           {typeof Data !== "string" ? (     
               <Fragment>
                 {/* <Link to={`/details/${p.id}`}> */}
                   <StyledCard>
                     <p>{Data.name}</p>
                     
                     {/* <ImgCard src={p.image} /> */}
                     <p>{Data.description}</p>
                     <p>{Data.cityId}</p>
                     <br />
                   </StyledCard>
                 {/* </Link> */}
               </Fragment>
           
           ) : typeof Data === "string" ? (
             <h1> {Data}</h1>
           ) : (
             <h1> Cargando datos</h1>
           )}
           </StyledCardContainer>
        }
    </div>
  )
}

export default ShelterData