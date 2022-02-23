import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Routes, Route } from "react-router-dom";
import { getShelterDetail, getPetsFilter,getPetByShelter } from "../Redux/Actions/index.js";

// componentes
import ShelterInfo from "./ShelterInfo.jsx";
import ShelterDetailNav from "./ShelterDetailNav";
import FormTransit from "./FormTransit.jsx";

// estilos
import { StyledDiv } from "../Styles/StyledShelterDetails";

const ShelterDetail = () => {

  let { id } = useParams();
  const dispatch = useDispatch();
  let Data = useSelector((state) => state.shelterDetail);
  let cityId= Data.cityId

  useEffect(() => {
    dispatch(getShelterDetail(id))
    // dispatch(getPetByShelter(id))
  }, [dispatch, id]);

  useEffect(() => {
    if (cityId){
      dispatch(getPetsFilter(`http://localhost:3001/pets/${cityId}?shelterId=${id}`));
    }
    
  }, [dispatch, cityId]);

 // const pets2 = useSelector((state) => state.petsByShelter)
  const pets = useSelector((state) => state.petsfilter)

  return (
    <StyledDiv>
      <ShelterDetailNav id={id} />
      <Routes>
        <Route path="/" element={<ShelterInfo Data={Data} pets = {pets}/>} />
        <Route path="/form" element={<FormTransit/>} />
      </Routes>
    </StyledDiv>
  );
};

export default ShelterDetail;
