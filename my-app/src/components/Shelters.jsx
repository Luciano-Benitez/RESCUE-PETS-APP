import React from "react";
import {useSelector} from 'react-redux';
import CardShelter from './CardShelter';
import { Link } from "react-router-dom";

export default function Shelters() {

    const allShelters = useSelector((state) => state.Shelters);
    console.log('estado: ', allShelters)
    return (
        <div>   
            <Link  to={'/'} ><button>Ir a Inicio</button></Link>
            {
                
                allShelters?.map(e => {
                    return (
                        <CardShelter key={e.id} name={e.name} address={e.address} phonenumber={e.phoneNumber} /> 
                    )
                }) 
            }
        </div>
        );
};