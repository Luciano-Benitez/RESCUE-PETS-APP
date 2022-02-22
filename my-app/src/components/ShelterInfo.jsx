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
                <div>
                    {
                        pets ? pets.map(e => (
                            <h2>{e.name}</h2>
                        )) : <h2>Loading...</h2>
                    } 
                </div>
            </DivContenedor>
            
        </div>
    )
}

export default ShelterInfo