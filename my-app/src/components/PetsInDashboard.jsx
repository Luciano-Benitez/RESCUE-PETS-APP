import React, { useEffect, useState, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPetsForDashboard } from '../Redux/Actions'
import styled from 'styled-components';
import ReadOnlyRows from './ReadOnlyRows';
import EditableRows from './EditableRows';



const PetsInDashboard = () => {

    const dispatch = useDispatch()

    const routeInfo = useSelector(state => state.ShelterAndCityId)
    const route = `http://localhost:3001/pets/${routeInfo.cityId}?shelterId=${routeInfo.shelterId}`

    useEffect( async()=>{
      await dispatch(getPetsForDashboard(route))
      },[dispatch])
      const petsFromShelter = useSelector( state => state.petsForDashboard )

      const [data, setData] = useState('')
      
      useEffect(() => {
          setData(petsFromShelter)
      }, [petsFromShelter])
      

    const [editFormData, seteditFormData] = useState({
      name: '',
      sterilization: '',
      weight: '',
      description: '',
      image: '',
      speciesId: '',
      temperament: '',
      age: '',
      petStatus: ''
    })

    const handleEditFormChange = (event) => {
      event.preventDefault();
      // const fieldName = event.target.getAttribute('name')
      // const fieldValue = event.target.value

      // const newFormData = {... editFormData}
      // newFormData[fieldName] = fieldValue;
      console.log("flag event",event)
      console.log(event.target)
      console.log(event.target.name)
      console.log(event.target.value)
      seteditFormData({
        ...editFormData,
        [event.target.name]: event.target.value
      })}



    const [editPetId, seteditPetId] = useState('')

    const handleEditClick = (event, data) => {
      event.preventDefault();
      seteditPetId(data.id)
      const formValues = {
        name: data.name,
        sterilization: data.sterilization,
        weight: data.weight,
        description: data.description,
        image: data.image,
        speciesId: data.speciesId,
        temperament: data.temperament,
        age: data.age,
        petStatus: data.petStatus
      }
      seteditFormData(formValues)
    }

    const handleEditedFormSubmit = (event) => {
      event.preventDefault();
      const editedPetInfo = {
        id: editPetId,
        name: editFormData.name,
        sterilization: editFormData.sterilization,
        weight: editFormData.weight,
        description: editFormData.description,
        image: editFormData.image,
        speciesId: editFormData.speciesId,
        temperament: editFormData.temperament,
        age: editFormData.age,
        petStatus: editFormData.petStatus
      }
      const newData = [...data];
      const index = data.findIndex((pet) => pet.id === editPetId)
      newData[index] = editedPetInfo
      setData(newData);
      seteditPetId(null);
    }

    const handleCancelClick = (event) => {
      event.preventDefault();
      seteditPetId(null);
    }

    const handleDeleteClick = (petId) => {
      const newData = [...data];
      const index = data.findIndex((pet) => pet.id === petId)
      newData.splice(index, 1)
      setData(newData)

    }

  return (
    <form onSubmit={handleEditedFormSubmit}>
      <Center>
        <Table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Esterelization</th>
                <th>Peso</th>
                <th>Descripción</th>
                <th>Imágenes</th>
                <th>Especie</th>
                <th>Temperamento</th>
                <th>Edad</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {
              data.length? data.map(data => 
                <Fragment>
                  {editPetId === data.id ? (
                    <EditableRows
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                    ) : (
                    <ReadOnlyRows
                    data={data}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    />
                    )}
                  </Fragment>
                ) : <tr ><td>Loading</td></tr>
              }
            </tbody>
        </Table>
      </Center>
    </form>
  )
}

export default PetsInDashboard

export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: grid;
`

export const Table = styled.table`
position: relative;
align-self: center;
justify-self: center;
font-size: 10px;


.app-container {
display: flex;
flex-direction: column;
gap: 10px;
padding: 1rem;
}

table {
border-collapse: collapse;
width: 100%;
}

th,
td {
border: 1px solid #ffffff;
text-align: left;
padding: 8px;
font-size: 12px;
}

th {
background-color: #63ac44;
color: #ffffff;
}

td {
background-color: #ddf4ff;
}

form {
display: flex;
gap: 5px;
}

form td:last-child {
display: flex;
justify-content: space-evenly;
}

form * {
font-size: 28px;
}
`