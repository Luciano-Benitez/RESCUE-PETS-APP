import React, { useState } from "react";
import { DivContainer, StyledButton } from "../Styles/StyledFormShelter";

const FormShelter = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
    country: "",
    city: "",
    address: "",
    userName: "",
    password: "",
    role: "shelter",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value,
    });
  };

  return (
    <DivContainer>
      <h2 className="text-center">Registro</h2>
      <form className="formulario">
        <fieldset>
          <legend>Tus Datos</legend>

          <div className="campo">
            <label for="name">Nombre del Refugio: </label>
            <input
              id="name"
              onChange={handleChange}
              value={input.name}
              name="name"
              type="text"
              placeholder="Nombre"
              required
            />
          </div>

          <div className="campo">
            <label for="email">Mail: </label>
            <input
              id="email"
              value={input.email}
              name="email"
              type="email"
              placeholder="Mail"
              required
            />
          </div>

          <div className="campo">
            <label for="phoneNumber">Teléfono: </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={input.phoneNumber}
              type="tel"
              placeholder="Teléfono"
              required
            />
          </div>

          <div class="campo">
            <label for="description">Su Misión: </label>
            <textarea
              id="description"
              name="description"
              value={input.description}
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Localización</legend>
          <div class="campo">
            <label for="pais">País: </label>
            <select id="pais">
              <option disabled selected>
                -- Seleccione --
              </option>
              <option value="MX">Mexico</option>
              <option value="PR">Peru</option>
              <option value="COL">Colombia</option>
              <option value="BOL">Bolivia</option>
              <option value="CHI">Chile</option>
              <option value="ARG">Argentina</option>
              <option value="VEN">Venezuela</option>
            </select>
          </div>
          <div class="campo">
            <label for="ciudades">Ciudad: </label>
            <input list="ciudades" name="ciudades" />
            <datalist id="ciudades">
              <option value="Buenos Aires" />
              <option value="Bogotá" />
              <option value="Medellin" />
              <option value="Caracas" />
              <option value="Mexicali" />
              <option value="Santa Cruz" />
            </datalist>
          </div>
          <div className="campo">
            <label for="address">Dirección: </label>
            <input id="address" type="text" placeholder="Dirección" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Información Extra</legend>

          <div className="campo">
            <label for="UserName">Nombre Usuario: </label>
            <input
              id="UserName"
              type="text"
              placeholder="Nombre de Usuario"
              required
            />
          </div>

          <div className="campo">
            <label for="password">Contraseña: </label>
            <input
              id="password"
              type="password"
              placeholder="Nombre de Usuario"
              required
            />
          </div>
        </fieldset>
        <StyledButton
          class="btn"
          type="submit"
          value="Registrarme"
        ></StyledButton>
      </form>
      {/* <img src="https://www.pngmart.com/files/4/Golden-Retriever-Puppy-PNG-File.png" alt="imagen" /> */}
    </DivContainer>
  );
};

export default FormShelter;
