import React, { Fragment, useEffect } from "react";

import {
  StyledCard,
  StyledCardContainer,
  ImgCard,
  StyledInfo,
} from "../Styles/StyledSimilarPets.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function SimilarPets(props) {
  const pets = useSelector((state) => state.pets_similar);

  if (pets) {
    return (
      <Fragment>
        {/* <StyledInfo ><h1>Más recomendaciones para ti </h1></StyledInfo  > */}
        <StyledCardContainer>
          {pets.map((e) => (
            <Link to={`/details/${e.id}`}>
              <StyledCard key={e.id}>
                {" "}
                <h1>{e.name} </h1>
                <ImgCard src={e.image} />
                <br />
              </StyledCard>
            </Link>
          ))}
        </StyledCardContainer>
      </Fragment>
    );
  }
}

export default SimilarPets;
