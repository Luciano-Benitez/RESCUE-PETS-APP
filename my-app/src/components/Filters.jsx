import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getcities, getCountries, getPetsFilter, getStates, getTemperaments} from '../Redux/Actions/index'
import { Container,SelectStyle } from '../Styles/StyledFilters'

const Filters = ({idcity}) => {
     const dispatch = useDispatch()

     
     const countries = useSelector((state) => state.countries)
     const states = useSelector((state) => state.states)
     const cities = useSelector((state) => state.cities)
     const pets = useSelector((state) => state.petsfilter)
     const temperaments = useSelector((state) => state.temperaments)
     const ages = useSelector((state) => state.ages)
     const city = useSelector((state) => state.cityId)
     const status=useSelector((state)=>state.status)

     
     // shelterId: '',
     // speciesId: '',
     // ageId: '',
     // temperamentId: '',
     // petStatusId:''



     const [link, setLink] = useState(`http://localhost:3001/pets/${idcity}`)

     const [input, setInput] = useState({})





     useEffect(()=>{
          dispatch(getCountries())
     },[dispatch])

     useEffect(()=>{
          setLink(`http://localhost:3001/pets/${idcity}`)
     },[idcity])

     useEffect(()=>{
          let query = `${link}?`
          Object.entries(input).forEach(([key,value])=> {
               query = `${query}${[key]}=${[value]}&`
          
          })  
          dispatch(getPetsFilter(query))
     },[input])



     function handleSelect(e) {
          setInput( (input) => { return {
               ...input,
               [e.target.name]: e.target.value
          }})
          // setLink(`http://localhost:3001/pets/${idcity}`)
          
          }

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
          const query = `${link}?petStatusId=${event.target.value}&`
          setLink(query)
          console.log(query)
          dispatch(getPetsFilter(query))
     }
     const handleTemperament = (event) => {
          const query = `${link}?temperamentId=${event.target.value}&`
          setLink(query)
          console.log(query)
          dispatch(getPetsFilter(query))
          // setLink(`http://localhost:3001/pets/${city}`)
     }
     const handleAge = (event) => {
          const query = `${link}?ageId=${event.target.value}&`
          setLink(query)
          console.log(query)
          dispatch(getPetsFilter(query))
          // setLink(`http://localhost:3001/pets/${city}`)
     }
     console.log(input)
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
          <SelectStyle name='shelterId' onChange={(e)=>handleSelect(e)}>
                    <option  hidden >Refugios</option>
                    <option>Mock-up: Refugio 1</option>
                    <option>Mock-up: Refugio 2</option>
                    <option>Mock-up: Refugio 3</option>
               </SelectStyle>
          {/* <label>Por Especie:</label> */}
          <SelectStyle name='speciesId' onChange={(e)=>handleSelect(e)}>
                    <option hidden >Especies</option>
                    <option>Mock-up: Perros</option>
                    <option>Mock-up: Gatos</option>
                    <option>Mock-up: Otros</option>
               </SelectStyle>
          {/* <label>Por Edad:</label> */}
          <SelectStyle name='ageId' onChange={e => handleSelect(e)}>
                    <option hidden >Rango Edad</option>
                    {ages?.map(element => (
                         <option key={element.id} value={element.id} >{element.age}</option>
                    ))}
               </SelectStyle>
          {/* <label>Temperamento:</label> */}
          <SelectStyle name='temperamentId' onChange={(e)=>handleSelect(e)}>
                    <option hidden >Temperamento</option>
                    {temperaments && temperaments?.map(element => (
                         <option key={element.id} value={element.id} >{element.temperament}</option> 
                    )) 
                    }
               </SelectStyle>
          {/* <label>Status:</label> */}
          <SelectStyle name='petStatusId' onChange={(e)=>handleSelect(e)}>
                    <option hidden >Status</option>
                    {status?.map(element => (
                         <option key={element.id} value={element.id} >{element.status}</option>
                    ))}
               </SelectStyle>
     </Container>
     )
}

export default Filters
