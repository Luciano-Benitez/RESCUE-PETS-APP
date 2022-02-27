import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormAdoption, sendAdoption, findOrCreateProfileUser } from "../Redux/Actions/index";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


//estilos
import {DivContainer} from '../Styles/StyledFormTransit'

const FormAdoption = ({ petId, Datos }) => {
  const dispatch = useDispatch();
  const history = useNavigate()
  const form = useSelector((state) => state.formAdoption);

  const [input, setInput] = useState([])
  const [profileData, setProfileData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    roleId: "3",
  });


  useEffect(() => {
    if (form.length === 0 && Datos[0]) {
      let idShelter = Datos[0].shelterId 
      dispatch(getFormAdoption(idShelter, 1))
    }
  }, [Datos])

  function handleChangeProfile(event){
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  }

  function handleChangeQuestions(event) {
    if (input.length === 0) {
      setInput([
        ...input,
        { idquestion: Number(event.target.name), answer: event.target.value },
      ]);
    } else {
      input.map((e, index) => {
        if (Number(e.idquestion) === Number(event.target.name)) {
          input[index].answer = event.target.value;
          return e;
        } else if (
          !input.find((e) => Number(e.idquestion) === Number(event.target.name))
        ) {
          setInput([
            ...input,
            {
              idquestion: Number(event.target.name),
              answer: event.target.value,
            },
          ]);
        }
      });
    }
  }

  async function handleClick(event){
    event.preventDefault()
    let profile = await dispatch(findOrCreateProfileUser(profileData))
    
    let payload = {
      idform: form[0].id,
      answer: input,
      idpet: Datos[0].id,
      profileId: profile.foundProfile ? profile.foundProfile.id : profile.createProfile.id
    }
    dispatch(sendAdoption(payload))
    Swal.fire(
      "Genial!",
      "Registro realizado correctamente. Si has sido seleccionado pronto nos comunicaremos contigo",
      "sucess"
    );
    setInput([]);
  }

  return (
    <DivContainer>
      <h1>FORMULARIO DE ADOPCIÓN</h1>
      <p>Estas a un paso de cambiar una vida</p>
      <form className="formulario">

      <div>
          <label>Nombre obligatorio</label>
          <input
            type="text"
            className="inputForm"
            value={profileData.name}
            name="name"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        <div>
          <label>Apellido</label>
          <input
            type="text"
            className="inputForm"
            value={profileData.lastName}
            name="lastName"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        <div>
          <label>Whastapp</label>
          <input
            type="text"
            className="inputForm"
            value={profileData.phoneNumber}
            name="phoneNumber"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        <div>
          <label>Dirección</label>
          <span>dirección, ciudad, provincia/estado</span>
          <input
            type="text"
            className="inputForm"
            value={profileData.address}
            name="address"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            className="inputForm"
            value={profileData.email}
            name="email"
            onChange={(e) => handleChangeProfile(e)}
          />
        </div>

        {form[0] &&
          form[0].questions.map((e) => (
            <div key={e.id}>
              <label>{`${e.question}: `}</label>
              <textarea
              name={e.id}
              onChange={(event)=>handleChangeQuestions(event)}
              cols="60"
              rows="5"
              required
              />
            </div>
          ))}
          <button onClick={handleClick}>Enviar Formulario</button>
      </form>
    </DivContainer>
  );
};

export default FormAdoption;
