import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Routes, Route } from "react-router-dom";
import { getShelterDetail } from "../Redux/Actions/index.js";

// componentes
import ShelterInfo from "./ShelterInfo.jsx";
import ShelterDetailNav from "./ShelterDetailNav";
import FormTransit from "./FormTransit.jsx";

// estilos
import { StyledDiv } from "../Styles/StyledShelterDetails";

const ShelterDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.shelterDetail);

  useEffect(() => {
    dispatch(getShelterDetail(id));
  }, [dispatch, id]);

  console.log(Data);

  return (
    <StyledDiv>
      <ShelterDetailNav id={id} />
      <Routes>
        <Route path="/" element={<ShelterInfo Data={Data} />} />
        <Route path="/form" element={<FormTransit/>} />
      </Routes>
    </StyledDiv>
  );
};

export default ShelterDetail;
