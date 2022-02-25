import React, { Fragment, useEffect , useLayoutEffect} from "react";
import { getPetsSimilar } from '../Redux/Actions/index.js';
import {
  StyledCard,
  StyledCardContainer,
  ImgCard,
  StyledInfo,
} from "../Styles/StyledSimilarPets.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function SimilarPets(props) {
  const petsfilter = useSelector((state) => state.petsfilter);
  const pets = useSelector((state) => state.pets_similar);
  const Datos = useSelector((state) => state.petOne);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Datos ) {
      dispatch(getPetsSimilar(Datos, petsfilter));
    }
  }, [dispatch]);


  if (pets) {
    return (
      <Fragment>
        {/* <StyledInfo ><h1>Más recomendaciones para ti </h1></StyledInfo  > */}
        <StyledCardContainer>
          {pets.map((e) => (
            <Link to={`/details/${e.id}`} key={e.id}>
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
