import React, { useState, useEffect } from "react";
import { DivContainer, StyledButton } from "../Styles/StyledFormShelter";
import { StyleButton } from "../Styles/StyledButtons";
import { useSelector, useDispatch } from "react-redux";

import {
  getCountries,
  getStates,
  getcities,
  cleanStateForm,
} from "../Redux/Actions/index.js";

const FormShelter = () => {
  const allCountries = useSelector((state) => state.countries);
  const statesXcountry = useSelector((state) => state.states);
  const citiesXstate = useSelector((state) => state.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    return () => dispatch(cleanStateForm());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
    country: "",
    state: "",
    city: "",
    address: "",
    password: "",
    role: "1",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
    dispatch(getStates(e.target.value));
  };

  const handleSelectState = (e) => {
    setInput({
      ...input,
      state: e.target.value,
    });
    dispatch(getcities(e.target.value));
  };

  const handleSelectCity = (e) => {
    setInput({
      ...input,
      city: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    //dispatch(postPokemon(input));;
    setInput({
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
      country: "",
      state: "",
      city: "",
      address: "",
      password: "",
      role: "1",
    });
  };

  return (
    <DivContainer>
      <h2 className="text-center">Registro</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Tus Datos</legend>

          <div className="campo">
            <label>Nombre del Refugio: </label>
            <input
              onChange={handleChange}
              value={input.name}
              name="name"
              type="text"
              placeholder="Nombre"
            />
          </div>

          <div className="campo">
            <label>Mail: </label>
            <input
              onChange={handleChange}
              value={input.email}
              name="email"
              type="email"
              placeholder="Mail"
            />
          </div>

          <div className="campo">
            <label>Teléfono: </label>
            <input
              onChange={handleChange}
              name="phoneNumber"
              value={input.phoneNumber}
              type="tel"
              placeholder="Teléfono"
              required
            />
          </div>

          <div className="campo">
            <label>Su Misión: </label>
            <textarea
              onChange={handleChange}
              name="description"
              value={input.description}
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Localización</legend>

          <div className="campo">
            <label>País: </label>
            <select onChange={handleSelectCountry}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {allCountries?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.country}
                </option>
              ))}
            </select>
          </div>

          <div className="campo">
            <label>Estado: </label>
            <select onChange={handleSelectState}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {statesXcountry?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.state}
                </option>
              ))}
            </select>
          </div>

          <div className="campo">
            <label>Ciudad: </label>
            <select id="ciudades" onChange={handleSelectCity}>
              <option disabled selected>
                -- Seleccione --
              </option>
              {citiesXstate?.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.city}
                </option>
              ))}
            </select>
          </div>
          <div className="campo">
            <label>Dirección: </label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Dirección"
              value={input.address}
              name="address"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Contraseña</legend>

          <div className="campo">
            <label>Contraseña: </label>

            <input 
            onChange={handleChange}
            type="password" 
            name='password'
            value={input.password}
            placeholder="Contraseña" 
            required />

            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={input.password}
              placeholder="Nombre de Usuario"
              required
            />
                
          </div>
        </fieldset>
        <StyleButton
          className="btn"
          type="submit"
          value="Registrarme"
        >Registrarme</StyleButton>
      </form>
      {/* <img src="https://www.pngmart.com/files/4/Golden-Retriever-Puppy-PNG-File.png" alt="imagen" /> */}
    </DivContainer>
  );
};

export default FormShelter;
