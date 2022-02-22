import React, { useState } from "react";

// estilos
import {DivInputs, FormStyle} from '../Styles/StyledShelterDetails'

function FiltersInShelterDetails() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
      <div>
    <FormStyle>
      <h3>Refina tu búsqueda</h3>

      <DivInputs>
        <label>Busca por Mascota: </label>
        <input
          onChange={handleChange}
          value={name}
          name="name"
          type="text"
          placeholder="Nombre"
        />
        <button>Buscar</button>
      </DivInputs>

      <DivInputs>
        <label>Busca por Mascota: </label>
        <input
          onChange={handleChange}
          value={name}
          name="name"
          type="text"
          placeholder="Nombre"
        />
        <button>Buscar</button>
      </DivInputs>

    </FormStyle>
    </div>
  );
}

export default FiltersInShelterDetails;
