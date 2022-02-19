import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../Redux/Actions/index'
import { Container,SelectStyle } from '../Styles/StyledFilters'

const Filters = () => {
     const dispatch = useDispatch()

     const countries = useSelector((state) => state.countries)

     useEffect(()=>{
          dispatch(getCountries())
     },[dispatch])


     const handleSubmitCountry = (event) => {
          let ev = event.target.value
          console.log(ev)
          return ev
     }
  return (
    <Container>
        {/* <label>Por País:</label> */}
            <SelectStyle onChange={e => handleSubmitCountry(e)}>
                 <option hidden >Países</option>
                 {countries.map(e => (
                      <option key={e.id} value={e.id} >{e.country}</option>
                 ))}
            </SelectStyle>
        {/* <label>Por Ciudades:</label> */}
           <SelectStyle>
                <option hidden >Ciudades</option>
                <option>Mock-up: Ejemplo 1</option>
                <option>Mock-up: Ejemplo 2</option>
                <option>Mock-up: Ejemplo 3</option>
           </SelectStyle>
        {/* <label>Por Refugio:</label> */}
       <SelectStyle>
                <option hidden >Refugios</option>
                <option>Mock-up: Refugio 1</option>
                <option>Mock-up: Refugio 2</option>
                <option>Mock-up: Refugio 3</option>
           </SelectStyle>
        {/* <label>Por Especie:</label> */}
       <SelectStyle>
                <option hidden >Especies</option>
                <option>Mock-up: Perros</option>
                <option>Mock-up: Gatos</option>
                <option>Mock-up: Otros</option>
           </SelectStyle>
        {/* <label>Por Edad:</label> */}
       <SelectStyle>
                <option hidden >Rango Edad</option>
                <option>Mock-up: Rango 1 </option>
                <option>Mock-up: Rango 2</option>
                <option>Mock-up: Rango 3</option>
           </SelectStyle>
        {/* <label>Temperamento:</label> */}
       <SelectStyle>
                <option hidden >Temperamento</option>
                <option>Mock-up: Temp 1 </option>
                <option>Mock-up: Temp 2</option>
                <option>Mock-up: Temp 3</option>
           </SelectStyle>
        {/* <label>Status:</label> */}
       <SelectStyle>
                <option hidden >Status</option>
                <option>Mock-up: Sin adoptar </option>
                <option>Mock-up: En proceso </option>
                <option>Mock-up: Adoptado</option>
           </SelectStyle>
    </Container>
  )
}

export default Filters
