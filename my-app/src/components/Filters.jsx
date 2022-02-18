import React from 'react'
import { Container,SelectStyle } from '../Styles/StyledFilters'

const Filters = () => {
  return (
    <Container>
        {/* <label>Por País:</label> */}
            <SelectStyle>
                <option hidden >Países</option>
                <option>Mock-up: Argentina</option>
                <option>Mock-up: México</option>
                <option>Mock-up: Colombia</option>
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
