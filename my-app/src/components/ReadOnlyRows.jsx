import React from 'react'

const ReadOnlyRows = ({data, handleEditClick, handleDeleteClick}) => {
    console.log('flag handleEditClick',handleEditClick)
    return (
        <tr key={data.id}>
            <td>{data.name}</td>
            {data.sterilization? <td>True</td> : <td>False</td> }
            <td>{data.weight}</td>
            <td>{data.description}</td>
            <td>{data.image}</td>
            <td>{data.speciesId}</td>
            <td>{data.temperament.temperament}</td>
            <td>{data.age.age}</td>
            <td>{data.petStatus.status}</td>
            <td>
                <button type='button' onClick={(event) => handleEditClick(event, data)}>Editar</button>
                <button type='button' onClick={() => handleDeleteClick(data.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRows