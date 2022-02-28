import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getSpecies, getAges, getTemperaments, getGenres, searchPetByName} from '../Redux/Actions/index'

// estilos
import { DivInputs, FormStyle } from "../Styles/StyledShelterDetails";

function FiltersInShelterDetails({input, setInput, pets}) {
 
  
  const dispatch= useDispatch()

  const [name, setName] = useState("");
  

  const species = useSelector((state) => state.species)
  const ages = useSelector((state) => state.ages)
  const temperaments = useSelector((state) => state.temperaments)
  const genres = useSelector((state)=>state.allGenres)
  
  useEffect(() => {
   if (species === undefined || species.length === 0 ) {
    dispatch(getSpecies());
   }
   if (ages === undefined || ages.length === 0 ) {
    dispatch(getAges());
   }
   if (temperaments === undefined || temperaments.length === 0 ) {
    dispatch(getTemperaments());
   }
   if (genres === undefined || genres.length === 0 ) {
    dispatch(getGenres());
   }
      
  }, [species, temperaments, ages]);


  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handlefind = (e) => {
    e.preventDefault()
    dispatch(searchPetByName(name))
  }


  function handleSelect(e) {
    if(isNaN(Number(e.target.value))){
         let temp = input
         delete temp[e.target.name]
         console.log(temp)
         setInput((input) => {return{...input}})
    }else{
         setInput( (input) => { return {
              ...input,
              [e.target.name]: e.target.value
         }})
    }
    }

    function handleReset(e){
      e.preventDefault()
      window.location.reload()
    }

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
          <button onClick={(e) => handlefind(e)}>Buscar</button>
        </DivInputs>

        <DivInputs>
          <label>Expecie: </label>
          <select name='speciesId' onChange={(e)=>handleSelect(e)}>
            <option disabled selected>
              -- Seleccione --
            </option>
            <option value={"Especies"} >Todos</option>
            {species?.map(s =>(
                         <option key={s.id} value={s.id}>{s.specie}</option>
                    ))}
          </select>
        </DivInputs>

        <DivInputs>
          <label>Género: </label>
          <select name='genreId' onChange={(e)=>handleSelect(e)}>
            <option disabled selected>
              -- Seleccione --
            </option>
            <option value={"Generos"} >Todos</option>
            {genres?.map(s =>(
                         <option key={s.id} value={s.id}>{s.genre}</option>
                    ))}
          </select>
        </DivInputs>

        <DivInputs>
          <label>Rango de Edad: </label>
          <select name='ageId' onChange={(e)=>handleSelect(e)}>
            <option disabled selected>
              -- Seleccione --
            </option>
            <option value={"Edad"} >Todos</option>
            {ages?.map(element => (
                         <option key={element.id} value={element.id} >{element.age}</option>
                    ))}
          </select>
        </DivInputs>

        <DivInputs>
          <label>Temperamento: </label>
          <select name='temperamentId' onChange={(e)=>handleSelect(e)}>
            <option disabled selected>
              -- Seleccione --
            </option>
            <option value={"Temperamento"} >Todos</option>
            {temperaments?.map(element => (
                         <option key={element.id} value={element.id} >{element.temperament}</option> 
                    )) 
                    }
          </select>
        </DivInputs>
        <button onClick={(e)=>handleReset(e)}>Resetear</button>
      </FormStyle>
    </div>
  );
}

export default FiltersInShelterDetails;
