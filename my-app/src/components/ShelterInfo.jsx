import React from 'react'
import FiltersInShelterDetails from './FiltersInShelterDetails'

// estilos
import {DivContenedor} from '../Styles/StyledShelterDetails'


const ShelterInfo = ({Data, pets}) =>{


    return (
        <div>
            <h1>Hola, soy la info del refugio</h1>
            <DivContenedor>
                <FiltersInShelterDetails/>
                <span>Soy las cards</span>
            </DivContenedor>
            
        </div>
    )
}

export default ShelterInfo