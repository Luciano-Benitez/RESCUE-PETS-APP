import React, { useState } from "react";
import {DivContainer} from '../Styles/StyledFormShelter'

function FiltersInShelterDetails() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
      <DivContainer>
    <form>
      <h3>Refina tu búsqueda</h3>

      <div>
        <label>Busca por Mascota: </label>
        <input
          onChange={handleChange}
          value={name}
          name="name"
          type="text"
          placeholder="Nombre"
        />
        <button>Buscar</button>
      </div>
    </form>
    </DivContainer>
  );
}

export default FiltersInShelterDetails;
