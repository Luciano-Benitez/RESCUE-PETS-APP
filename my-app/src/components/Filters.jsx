import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getcities, getCountries, getPetsFilter, getStates, getTemperaments} from '../Redux/Actions/index'
import { Container,SelectStyle } from '../Styles/StyledFilters'

const Filters = ({idcity}) => {
     const dispatch = useDispatch()

     const [link, setLink] = useState(`http://localhost:3001/pets/${idcity}`)

     const countries = useSelector((state) => state.countries)
     const states = useSelector((state) => state.states)
     const cities = useSelector((state) => state.cities)
     const pets = useSelector((state) => state.petsfilter)
     const temperaments = useSelector((state) => state.temperaments)
     


     let petsfiltered = pets.map(e => {
          const objj = {
               temperament: e.temperament.temperament,
               id: e.temperament.id
          }
          return objj
     })

     let whatever = petsfiltered.filter((value, index, self) =>
     index === self.findIndex((t) => (
       t.place === value.place && t.name === value.name
     ))
   )

     let tempsFiltered = petsfiltered.filter((element, index) => {
          return petsfiltered.indexOf(element) === index;
     });

     let petsfiltered2 = pets.map(e => e.age.age)
     let ageFiltered = petsfiltered2.filter((element, index) => {
          return petsfiltered2.indexOf(element) === index;
     });



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

     const handleStatus = (event) => {
          const query = `${link}?petStatusId=${event.target.value}`
          setLink(query)
          console.log(query)
          dispatch(getPetsFilter(query))
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
                    {ageFiltered?.map(element => (
                         <option key={element} value={element} >{element}</option>
                    ))}
               </SelectStyle>
          {/* <label>Temperamento:</label> */}
          <SelectStyle>
                    <option hidden >Temperamento</option>
                    {temperaments?.map(element => (
                         <option key={element.id} value={element.id} >{element.temperament}</option>
                    ))}
               </SelectStyle>
          {/* <label>Status:</label> */}
          <SelectStyle onChange={(e)=>handleStatus(e)}>
                    <option hidden >Status</option>
                    <option>Mock-up: Sin adoptar </option>
                    <option>Mock-up: En proceso </option>
                    <option>Mock-up: Adoptado</option>
               </SelectStyle>
     </Container>
     )
}

export default Filters
