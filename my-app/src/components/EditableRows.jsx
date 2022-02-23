import React from 'react'

const EditableRows = ({editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
        <td>
            <input
            type="text"
            required="required"
            placeholder='Registre un nombre...'
            name='name'
            value={editFormData.name}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <select onChange={handleEditFormChange}>
                <option hidden name='default' >Esterelización</option>
                <option name='sterilization' value="true" >True</option>
                <option name='sterilization' value="false" >False</option>
            </select>
        </td>
        <td>
            <input
            type="number"
            step="0.1"
            required="required"
            placeholder='Registre peso...'
            name='weight'
            value={editFormData.weight}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="text"
            required="required"
            placeholder='Capture descripción...'
            name='description'
            value={editFormData.description}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <input
            type="text"
            required="required"
            placeholder='Capture enlace de imágenes...'
            name='image'
            value={editFormData.image}
            onChange={handleEditFormChange}
            ></input>
        </td>
        <td>
            <select name='speciesId' onChange={handleEditFormChange}>
                <option hidden name='default' >Especie</option>
                <option value={1}>Gato</option>
                <option value={2}>Perro</option>
                <option value={3}>Pajaro</option>
                <option value={4}>Cerdo</option>
                <option value={5}>Otro</option>
            </select>
        </td>
        <td>
            <select name='temperament' onChange={handleEditFormChange}>
                <option hidden name='default' >Temperamento</option>
                <option value='1'>Activo</option>
                <option value='2'>Divertido</option>
                <option value='3'>Fiel</option>
                <option value='4'>Independiente</option>
                <option value='5'>Perezoso</option>
                <option value='6'>Tranquilo</option>
                <option value='7'>Amigable</option>
                <option value='8'>Inteligente</option>
                <option value='9'>Docil</option>
                <option value='10'>Valiente</option>
            </select>
        </td>
        <td>
            <select onChange={handleEditFormChange}>
                <option hidden name='default' >Edad</option>
                <option name='age' value='1'>Bebe</option>
                <option name='age' value='2'>Joven</option>
                <option name='age' value='3'>Adulto</option>
            </select>
        </td>
        <td>
            <select onChange={handleEditFormChange}>
                <option hidden name='default' >Estado</option>
                <option name='petStatus' value='1'>En adopcion</option>
                <option name='petStatus' value='2'>Adoptado</option>
                <option name='petStatus' value='3'>En tránsito</option>
            </select>
        </td>
        <td>
            <button type='submit' >Guardar</button>
            <button type='button' onClick={handleCancelClick}>Cancelar</button>
        </td>
    </tr>
  )
}

export default EditableRows