import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledDetails,
  StyledDetailsLeft,
  StyledDetailsRight,
  Cuadro,
  Imgag,
} from "../Styles/StyledDetails.js";
import { getPetId } from "../Redux/Actions/index.js";
import { useParams } from "react-router";

import {
  IoHeart,
  IoEgg,
  IoPaw,
  IoHourglass,
  IoSparkles,
  IoFitness,
  IoBonfire,
  IoBusiness
} from "react-icons/io5";

const Details = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const Datos = useSelector((state) => state.petOne);

  useEffect(() => {
    dispatch(getPetId(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      {" "}
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
            <h3>{Datos[0].name}</h3>
            
              <h1>{Datos[0].description}</h1>
              <p>
                <IoSparkles />  Weight:
              </p>
           <h1>{Datos[0].weight} </h1>
              <p>
                <IoHourglass /> Age:
              </p>
             
              <h1>{Datos[0].age.age}</h1>
              <p> <IoBonfire/> Temperament :</p>
              <h1>{Datos[0].temperament.temperament} </h1>
              {/* <p> <IoFitness/>Vaccines :</p><h1>{Datos[0].vaccines} </h1> */}
              
              <p><IoEgg />Especies :</p><h1> {Datos[0].species.specie} </h1>
          
              <p>     <IoHeart />Estado :</p>
              <h1>{Datos[0].petStatus.status} </h1>
              <p><IoBusiness/> Refugio :</p><h1>{Datos[0].shelter.name} </h1>
            </StyledDetailsRight>
          </>
        ) : (
          <h1>Sin Datos</h1>
        )}{" "}
      </StyledDetails>
    </Fragment>
  );
};
export default Details;
