import React, { Fragment } from "react";
import FiltersInShelterDetails from "./FiltersInShelterDetails";

// estilos
import { DivContenedor } from "../Styles/StyledShelterDetails";
import {
  StyledCard,
  StyledCardContainer,
  ImgCard,
} from "../Styles/StyledCards.js";

const ShelterInfo = ({ Data, pets, input, setInput }) => {
  return (
    <div>
      <h1>Hola, soy la info del refugio</h1>
      <DivContenedor>
        <FiltersInShelterDetails input={input} setInput={setInput} />
        <div>
          <StyledCardContainer key={Math.random(5)}>
            
            {typeof pets !== "string" ? (
              pets.map((p) => (
                <Fragment key={p.id}>
                  <Link to={`/details/${p.id}`}>
                    <StyledCard>
                      <h1>{p.name}</h1>

                      {/* <p>{p.description}</p> */}
                      <ImgCard src={p.image} />

                      <br />
                    </StyledCard>
                  </Link>
                </Fragment>
              ))
            ) : typeof pets === "string" ? (
              <h1> {pets}</h1>
            ) : (
              <h1> Cargando datos</h1>
            )}
          </StyledCardContainer>
        </div>
      </DivContenedor>
    </div>
  );
};

export default ShelterInfo;
