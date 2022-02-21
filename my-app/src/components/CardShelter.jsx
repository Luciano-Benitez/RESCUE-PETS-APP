import React from "react";

export default function CardShelter({name, address, phonenumber}) {

    return (
        <div>
            <h1>{name}</h1>
            <h3>Direccion: <p>{address}</p></h3>
            <h3>Numero Telefonico: <p>{phonenumber}</p></h3>
        </div>
        );
};

