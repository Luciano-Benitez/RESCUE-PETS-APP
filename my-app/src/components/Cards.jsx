import React, { Fragment } from "react";
import {StyledCard , StyledCardContainer } from '../Styles/StyledCards.js';


export default function Cards() {
  return (
    <Fragment>
    <br /> 
      <StyledCardContainer key={Math.random(5)}>
   
      <StyledCard>
          <h1>Uno</h1>
          <br />
          <img src="" className="img" />
          </StyledCard>

          <StyledCard>
          <h1>Uno</h1>
          <br />
          <img src="" className="img" />
          </StyledCard>

          <StyledCard>
          <h1>Uno</h1>
          <br />
          <img src="" className="img" />
          </StyledCard>

          <StyledCard>
          <h1>Uno</h1>
          <br />
          <img src="" className="img" />
          </StyledCard>

          <StyledCard>
          <h1>Uno</h1>
          <br />
          <img src="" className="img" />
          </StyledCard>

        </StyledCardContainer>
    </Fragment>
  );
}
