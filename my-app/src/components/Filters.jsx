import React from 'react'
import { Container } from '../Styles/StyledFilters'

const Filters = () => {
  return (
    <Container>
        <label>Por País:</label>
            <select>
                <option hidden >Países</option>
                <option>Mock-up: Argentina</option>
                <option>Mock-up: México</option>
                <option>Mock-up: Colombia</option>
            </select>
        <label>Por Ciudades:</label>
            <select>
                <option hidden >Ciudades</option>
                <option>Mock-up: Ejemplo 1</option>
                <option>Mock-up: Ejemplo 2</option>
                <option>Mock-up: Ejemplo 3</option>
            </select>
        <label>Por Refugio:</label>
        <select>
                <option hidden >Refugios</option>
                <option>Mock-up: Refugio 1</option>
                <option>Mock-up: Refugio 2</option>
                <option>Mock-up: Refugio 3</option>
            </select>
        <label>Por Especie:</label>
        <select>
                <option hidden >Especies</option>
                <option>Mock-up: Perros</option>
                <option>Mock-up: Gatos</option>
                <option>Mock-up: Otros</option>
            </select>
        <label>Por Edad:</label>
        <select>
                <option hidden >Rangos</option>
                <option>Mock-up: Rango 1 </option>
                <option>Mock-up: Rango 2</option>
                <option>Mock-up: Rango 3</option>
            </select>
        <label>Temperamento:</label>
        <select>
                <option hidden >Temperamento</option>
                <option>Mock-up: Temp 1 </option>
                <option>Mock-up: Temp 2</option>
                <option>Mock-up: Temp 3</option>
            </select>
        <label>Status:</label>
        <select>
                <option hidden >Status</option>
                <option>Mock-up: Sin adoptar </option>
                <option>Mock-up: En proceso </option>
                <option>Mock-up: Adoptado</option>
            </select>
    </Container>
  )
}

export default Filters