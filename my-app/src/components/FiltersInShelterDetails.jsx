import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getSpecies} from '../Redux/Actions/index'

// estilos
import { DivInputs, FormStyle } from "../Styles/StyledShelterDetails";

function FiltersInShelterDetails({Data}) {

  const dispatch= useDispatch()

  const [name, setName] = useState("");

  const species = useSelector((state) => state.species)
  
  useEffect(() => {
    dispatch(getSpecies());
    
  }, [species]);
console.log(species)

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
          <label>Expecie: </label>
          <select name='speciesId'>
            <option disabled selected>
              -- Seleccione --
            </option>
            <option value={"Especies"} >Especies</option>
            {species?.map(s =>(
                         <option key={s.id} value={s.id}>{s.specie}</option>
                    ))}
          </select>
        </DivInputs>
      </FormStyle>
    </div>
  );
}

export default FiltersInShelterDetails;
