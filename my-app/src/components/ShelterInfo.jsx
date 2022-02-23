import React, {Fragment} from 'react'
import FiltersInShelterDetails from './FiltersInShelterDetails'

// estilos
import {DivContenedor} from '../Styles/StyledShelterDetails'
import {StyledCard, StyledCardContainer, ImgCard} from '../Styles/StyledCards.js';


const ShelterInfo = ({Data, pets}) =>{


    return (
        <div>
            <h1>Hola, soy la info del refugio</h1>
            <DivContenedor>
                <FiltersInShelterDetails Data={Data}/>
                <div>
                <StyledCardContainer key={Math.random(5)}>
                    {
                        pets ? pets.map(e => (<Fragment key={e.id} >
                            <StyledCard >
                               <h1>{e.name}</h1>
                               <ImgCard src={e.image}/>
                            </StyledCard>
                            </Fragment> )) : <h2>Loading...</h2>
                    } 
                </StyledCardContainer>    
                </div>
            </DivContenedor>
            
        </div>
    )
}

export default ShelterInfo