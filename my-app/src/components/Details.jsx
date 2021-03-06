import React, { Fragment, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  StyledDetails,
  StyledDetailsLeft,
  StyledDetailsRight,
  Cuadro,
  Imgag,
} from "../Styles/StyledDetails.js";
import { getPetId } from "../Redux/Actions/index.js";
import { useParams } from "react-router";
import SimilarPets from "./SimilarPets.jsx";
import FormAdoption from "./FormAdoption.jsx";

import { getPetsSimilar } from "../Redux/Actions/index.js";

import Espe from "../Icos/espe.png";
import House from "../Icos/house.png";
import Edad from "../Icos/edad.png";
import Ref from "../Icos/ref.png";
import Salud from "../Icos/health.png";
import Peso from "../Icos/star.png";

const Details = () => {
  const dispatch = useDispatch();

  const pets = useSelector((state) => state.petsfilter);
  const Datos = useSelector((state) => state.petOne);
  let { id } = useParams();
  let id2 = window.location.pathname;
  id2 = id2.replace("/details/", "");

  useLayoutEffect(() => {
    if (pets && Datos) {
      dispatch(getPetsSimilar(Datos, pets));
    }

    if (!id2) {
      dispatch(getPetId(id));
    } else {
      dispatch(getPetId(id2));
    }
  }, [dispatch]);

  

  return (
    <Fragment>
      <StyledDetails>
        {" "}
        {Datos.length ? (
          <>
            <StyledDetailsLeft>
              <Cuadro>
                <Imgag src={Datos[0].image} />
              </Cuadro>
            </StyledDetailsLeft>
            <StyledDetailsRight>
              <h3> {Datos[0].name}</h3>

              <h1> {Datos[0].description}</h1>
              <h2>
                <img src={Peso} className="icos" />
                Peso:
                <span> {Datos[0].weight} </span>
              </h2>

              <h2>
                <img src={Edad} className="icos" />
                Edad:
                <span> {Datos[0].age.age} </span>
              </h2>

              <h2>
                <img src={House} className="icos" />
                Temperamento :<span> {Datos[0].temperament.temperament} </span>
              </h2>

              {/* <h2> <IoFitness/>Vaccines :</span></h2><h1>{Datos[0].vaccines} </h1> */}

              <h2>
                <img src={Espe} className="icos" />
                Especie :<span> {Datos[0].species.specie} </span>
              </h2>

              <h2>
                <img src={Salud} className="icos" />
                Estado :<span> {Datos[0].petStatus.status}</span>
              </h2>

              <h2>
                <img src={Ref} className="icos" />
                Refugio :<span> {Datos[0].shelter.name} </span>
              </h2>
            </StyledDetailsRight>
          </>
        ) : (
          <h1>Sin Datos</h1>
        )}{" "}
      </StyledDetails>

      <div>
        <FormAdoption Datos={Datos}/>
      </div>

      {Datos.length ? <SimilarPets /> : ""}
    </Fragment>
  );
};
export default Details;
