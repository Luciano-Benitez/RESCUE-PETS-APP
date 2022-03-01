import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import {
    StyledCard,
    StyledCardContainer,
    ImgCard,
    ImgCardFlag
  } from "../Styles/StyledCards.js";


const ShelterData = ({Data}) => {

  return (
    <div>
        {
           <StyledCardContainer key={Math.random(5)}> 
            {
            typeof Data !== "string" ? (    
               <Fragment>
                 {/* <Link to={`/details/${p.id}`}> */}
                   <StyledCard>
                     <h1>{Data.name}</h1>
                     {/* <ImgCard src={p.image} /> */}
                     <h3>{Data.description}</h3>
                    {
                      (typeof Data["city"] != "undefined" || Data["city"] != null) ?
                          <h2>{Data["city"]["city"]}</h2> : <h1> Cargando datos</h1>
                    }
                    {
                      (typeof Data["city"] != "undefined" || Data["city"] != null) ?
                      <h2>{Data["city"]["state"]["country"]["country"]}</h2> : <h1> Cargando datos</h1>
                     
                    }
                    {
                      (typeof Data["city"] != "undefined" || Data["city"] != null) ?
                      // <h2>{Data["city"]["state"]["country"]["flag"]}</h2> : <h1> Cargando datos</h1>
                      <ImgCardFlag src={Data["city"]["state"]["country"]["flag"]}/> : <h1> Cargando datos</h1>
                    }
                     <br />
                   </StyledCard>
                 {/* </Link> */}
               </Fragment>
           
           ) : typeof Data === "string" ? (
             <h1> {Data}</h1>
           ) : (
             <h1> Cargando datos</h1>
           )
           }
            </StyledCardContainer>
        }
    </div>
  )
}

export default ShelterData