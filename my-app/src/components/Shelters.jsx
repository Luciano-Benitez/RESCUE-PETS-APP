import React from "react";
import {useSelector} from 'react-redux';
import CardShelter from './CardShelter';
import { Link } from "react-router-dom";
import {StyledCard, StyledCardContainer} from '../Styles/StyledCardShelter.js';

export default function Shelters() {

    const allShelters = useSelector((state) => state.Shelters);
    console.log('estado: ', allShelters)
    return (
        <StyledCardContainer> 
         
            {
                
                typeof(allShelters) !== 'string' ? allShelters.map(e => {
                    return (
                        <CardShelter key={e.id} name={e.name} address={e.address} phonenumber={e.phoneNumber} /> 
                    )
                }) : typeof(allShelters) === 'string' ? (<h1> {allShelters}</h1>) : (<h1>             Cargando datos</h1>)
            }
       </StyledCardContainer>  
        );
};