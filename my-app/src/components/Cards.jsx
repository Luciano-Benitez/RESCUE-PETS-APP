import React, { Fragment } from "react";
import {StyledCard , StyledCardContainer, ImgCard } from '../Styles/StyledCards.js';
import Img from "../Icos/homeim1.svg"

export default function Cards() {
  return (
    <Fragment>
    <br /> 
      <StyledCardContainer key={Math.random(5)}>

      <StyledCard> <h1>Lorem ipsum dolor sit amet consectetur</h1>
      <ImgCard src={Img}  />
        
          <br />
          </StyledCard>

          <StyledCard>
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <br />
          <ImgCard src={Img}  />
          </StyledCard>

          <StyledCard>
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <br />
          <ImgCard src={Img}  />
          </StyledCard>

          <StyledCard>
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <br />
          <ImgCard src={Img}  />
          </StyledCard>

         
 </StyledCardContainer>
    </Fragment>
  );
}
