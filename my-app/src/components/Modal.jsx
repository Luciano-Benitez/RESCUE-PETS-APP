import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import {
    getCountries,
    getStates,
    getcities,
    getPetsFilter
  } from "../Redux/Actions/index.js";
  
  const Modal = ({setidcity, estado, cambiarEstado}) => {

    const [params, setParams] = useState(`http://localhost:3001/pets/`)

    const allCountries = useSelector((state) => state.countries);
    const statesXcountry = useSelector((state) => state.states);
    const citiesXstate = useSelector((state) => state.cities);
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
      }, [dispatch]);

      const handleSelectCountry = (e) => {
        dispatch(getStates(e.target.value));
      };
    
      const handleSelectState = (e) => {
        dispatch(getcities(e.target.value));
      };
    
      const handleSelectCity = (e) => {
        setidcity(e.target.value)
        const paramLink = `${params}${e.target.value}`
        dispatch(getPetsFilter(paramLink))
      };

      return (
        <>

        { estado &&

          <form>
              <h2>Elegí tu localización</h2>
              <span>Así podremos mostrarte las mascotas en adopción cerca tuyo</span>

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

          <button
          value="Ver Mascotas"
          onClick={()=>cambiarEstado(!estado)}
          >Ver Mascotas</button>
          
          </form>
  }
          </>
      )
  }

  export default Modal