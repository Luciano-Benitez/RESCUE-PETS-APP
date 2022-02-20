import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getcities, getCountries, getPetsFilter, getStates} from '../Redux/Actions/index'
import { Container,SelectStyle } from '../Styles/StyledFilters'

const Filters = ({idcity}) => {
     const dispatch = useDispatch()

     const countries = useSelector((state) => state.countries)
     const states = useSelector((state) => state.states)
     const cities = useSelector((state) => state.cities)
     const pets = useSelector((state) => state.petsfilter)

     useEffect(()=>{
          dispatch(getCountries())
     },[dispatch])


     const handleSubmitCountry = (event) => {
          dispatch(getStates(event.target.value))
     }

     const handleSubmitState = (event) => {
          dispatch(getcities(event.target.value))
     }

     const handleSubmitCities = (event) => {
          console.log(event.target.value)
          dispatch(getPetsFilter(event.target.value))
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
           <SelectStyle onChange={e => handleSubmitState(e)}>
                <option hidden >Estados</option>
                {states.map(e => (
                     <option key={e.id} value={e.id} >{e.state}</option>
                ))}
           </SelectStyle>

           <SelectStyle onChange={e => handleSubmitCities(e)}>
                <option hidden >Ciudades</option>
                {cities.map(e => (
                     <option key={e.id} value={e.id} >{e.city}</option>
                ))}
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
